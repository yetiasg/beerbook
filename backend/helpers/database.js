const createError = require('http-errors');
const { MongoClient } = require('mongodb');
const config = require('../config');

let _db;

const initDB = async (callback) => {
  if (_db) callback(null, _db);
  const client = new MongoClient(config.database.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    _db = client.db(config.database.DB_NAME);
    callback(null, _db);
  } catch (error) {
    callback(error);
  }
};

const getDB = () => {
  if (!_db) createError.InternalServerError('Db not initialized');
  return _db;
};

module.exports = {
  initDB,
  getDB,
};
