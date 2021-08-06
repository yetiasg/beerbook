const createError = require('http-errors');
const JWT = require('jsonwebtoken');
const config = require('../config');

const signAccessToken = (userId) => {
  return new Promise((resolve, reject) => {
    const payload = { userId };
    const secret = config.auth.ACCESS_TOKEN_SECRET;
    const options = { expiresIn: `${config.auth.TOKEN_EXPIRATION}h` };
    JWT.sign(payload, secret, options, (err, token) => {
      if (err) return reject(createError.InternalServerError());
      resolve(token);
    });
  });
};

const verifyAccessToken = (req, res, next) => {
  if (!req.headers['authorization']) return next(createError.Unauthorized());
  const token = req.headers['authorization'].split(' ')[1];
  if (!token) return next(createError.Unauthorized());
  JWT.verify(token, config.auth.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) {
      const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message;
      return next(createError.Unauthorized(message));
    }
    req.payload = payload;
    next();
  });
};

const signRefreshToken = (userId) => {
  return new Promise((resolve, reject) => {
    const payload = { userId };
    const secret = config.auth.REFRESH_TOKEN_SECRET;
    const options = { expiresIn: '1y' };
    JWT.sign(payload, secret, options, (err, token) => {
      if (err) return reject(createError.InternalServerError());
      resolve(token);
    });
  });
};

const verifyRefreshToken = (refreshToken) => {
  return new Promise((resolve, reject) => {
    JWT.verify(refreshToken, config.auth.REFRESH_TOKEN_SECRET, (err, payload) => {
      if (err){
        const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message;
        return reject(createError.Unauthorized(message));
      }
      resolve(userId = payload.userId);
    });
  });
};

module.exports = {
  signAccessToken,
  verifyAccessToken,
  signRefreshToken,
  verifyRefreshToken,
};
