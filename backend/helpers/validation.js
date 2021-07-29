const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().required()
});

const registerSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().alphanum().min(8).max(30).required(),
    repeat_password: Joi.ref('password')
});


module.exports = {
    loginSchema,
    registerSchema
};