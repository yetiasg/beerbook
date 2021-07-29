const {MongoClient} = require('mongodb');
const createError = require('http-errors');

let _db;

const initDB = async callback => {
    if(_db){
        callback(null, _db);
    }

    const client = new MongoClient(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    try{
        await client.connect();
        _db = await client.db('beerBookDB');
        callback(null, _db);
    }catch (error){
        callback(error);
    }
};

const getDB = () => {
    if(!_db) return createError('Database not initialized');
    return _db;
}

module.exports = {
    initDB,
    getDB
};