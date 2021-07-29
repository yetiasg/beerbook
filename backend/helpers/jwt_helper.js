const JWT = require('jsonwebtoken');
const createError = require('http-errors');

const signAccessToken = userId => {
    return new Promise((resolve, reject) => {
        const payload = {userId};
        const secret = process.env.ACCESS_TOKEN_SECRET;
        const options = {expiresIn: process.env.TOKEN_EXPIRATION};
        JWT.sign(payload, secret, options, (err, token) => {
            if(err){
                return reject(createError.InternalServerError());
            }
            resolve(token);
        });
    });
};

const verifyAccessToken = (req, res, next) => {
    if(!req.headers['authorization']) return next(createError.Unauthorized());
    const token = req.headers['authorization'].split(' ')[1];
    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if(err){
            const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message
            return next(createError.Unauthorized(message));
        }
        req.payload = payload;
        next();
    });
};


const signRefreshToken = userId => {
    return new Promise((resolve, reject) => {
        const payload = {userId};
        const secret = process.env.REFRESH_TOKEN_SECRET;
        const options = {expiresIn: '1y'};
        JWT.sign(payload, secret, options, (err, token) => {
            if(err){
                console.log(err);
                return reject(createError.InternalServerError());
            }
            resolve(token);
        });
    });
};

const verifyRefreshToken = refToken => {
    console.log(refToken);
    return new Promise((resolve, reject) => {
        JWT.verify(refToken, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
            if(err) return reject(createError.Unauthorized());
            console.log(userId = payload.userId);
            resolve(userId = payload.userId);
        })
    });
};


module.exports = {
    signAccessToken,
    verifyAccessToken,
    signRefreshToken,
    verifyRefreshToken
}