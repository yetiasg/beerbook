const bcrypt = require('bcrypt');
const createError = require('http-errors');

const hashPassword = async password => {
    try{
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }catch (error){
        throw createError.InternalServerError("Could not hash password");
    }
};

const comparePassword = async (password, hashedPassword) => {
    try{
        return await bcrypt.compare(password, hashedPassword);
    }catch (error){
        throw createError.InternalServerError("Could not compare password");
    }
};


module.exports = {
    hashPassword,
    comparePassword
}