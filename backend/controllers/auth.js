const createError = require('http-errors');
const {getDB} = require('../helpers/database');
const {loginSchema, registerSchema} = require('../helpers/validation');
const {hashPassword, comparePassword} = require('../helpers/bcrypt_helper');
const {signAccessToken, signRefreshToken, verifyRefreshToken} = require('../helpers/jwt_helper');


exports.login = async(req, res, next) => {
    try{
        const {email, password} = await loginSchema.validateAsync(req.body);
        const db = await getDB();
        const usersCollection = await db.collection('users'); 
        const user = await usersCollection.findOne({"email": email});
        if(!user) throw createError.NotFound('User not registered');
        const doMatch = await comparePassword(password, user.password);
        if(!doMatch) throw createError.Unauthorized('Username/password not valid');
        const token = await signAccessToken(user._id);
        const refToken = await signRefreshToken(user._id);
        res.status(200).json({token, refToken, _id: user._id, exiresIn: process.env.TOKEN_EXPIRATION})
    }catch (error){
        if(error.isJoi === true) error.status = 422;
        next(error);
    }
};

exports.register = async(req, res, next) => {
    try{
        let {email, password} = await registerSchema.validateAsync(req.body);
        const db = await getDB();
        const usersCollection = await db.collection('users');
        const user = await usersCollection.findOne({"email": email});
        if(user) throw createError.Conflict(`${email} is already registered`);
        password = await hashPassword(password);
        const newUser = await usersCollection.insertOne({email, password});
        let userId = newUser.insertedId;
        const token = await signAccessToken(userId);
        const refToken = await signRefreshToken(userId);
        res.status(200).json({token, refToken, userId, exiresIn: process.env.TOKEN_EXPIRATION});
    }catch (error){
        if(error.isJoi === true) error.status = 422;
        next(error);
    }
};

exports.refresh = async(req, res, next) => {
    try{
        const {refToken} = req.body;
        // const db = await getDB();
        // const refTokenBlackListCollection = await db.collection('refTokenBlackList');   //połączenie z kolecją
        // const result = await refTokenBlackListCollection.findOne({"tokens.refToken": refToken}); //czy token jest w kolekcji
        // if(result) throw createError.Unauthorized();  //jeśli jest to bład
        // throw createError.Unauthorized()
        const userId = await verifyRefreshToken(refToken);  //weryfikuj reftoken
        // await refTokenBlackListCollection.insertOne({tokens: {refToken: refToken}}); // dodaj stary token do kolekcji
        const token = await signAccessToken(userId);    //podpisz nowy access token
        const refreshToken = await signRefreshToken(userId);        //podpisz nofy ref token
        res.status(220).json({token, refToken: refreshToken, userId, exiresIn: process.env.TOKEN_EXPIRATION});
    }catch (error){
        next(error);
    }
};