const createError = require('http-errors');
const {getDB} = require('../helpers/database');
const {loginSchema, registerSchema} = require('../helpers/validation');
const {hashPassword, comparePassword} = require('../helpers/bcrypt_helper');
const {signAccessToken, signRefreshToken, verifyRefreshToken} = require('../helpers/jwt_helper');
const config = require('../config');

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
        const refreshToken = await signRefreshToken(user._id);
        res.status(200).json({token, refreshToken, userId: user._id, expiresIn: config.auth.TOKEN_EXPIRATION});
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
        const refreshToken = await signRefreshToken(userId);
        res.status(200).json({token, refreshToken, userId, exiresIn: config.auth.TOKEN_EXPIRATION});
    }catch (error){
        if(error.isJoi === true) error.status = 422;
        next(error);
    }
};

exports.refresh = async(req, res, next) => {
    try{
        let {refreshToken} = req.body;
        const userId = await verifyRefreshToken(refreshToken);
        const token = await signAccessToken(userId);
        refreshToken = await signRefreshToken(userId);
        res.status(220).json({token, refreshToken, userId, exiresIn: config.auth.TOKEN_EXPIRATION});
    }catch (error){
        next(error);
    }
};