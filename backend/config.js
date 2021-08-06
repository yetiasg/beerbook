module.exports = config = {
  server: {
      PORT: 8080,
  },
  database: {
      MONGO_URL: 'mongodb://localhost:27017',
      DB_NAME: 'beerBookDB'
  },
  auth:{
      ACCESS_TOKEN_SECRET: "c4ef147579ba30df819a232d7701d3f98ce514976a261bf62378c809db78068a",
      REFRESH_TOKEN_SECRET: "21f1bd4c2647fba9da790519359fa37bdf1e03187ce19f50448564a0de08e01d",
      TOKEN_EXPIRATION: 72 //hours
  }
}