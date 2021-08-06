const express = require('express');
const morgan = require('morgan');
const path = require('path');
const createError = require('http-errors');
const helmet = require('helmet');
const compression = require('compression');
const config = require('./config');

const {initDB} = require('./helpers/database');
const authRoute = require('./routes/auth');
const beerRoute = require('./routes/beerBook');

const app = express();
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use('/images', express.static(path.join('./images')));

if(app.get('env') === 'development') app.use(morgan('dev'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(beerRoute);
app.use('/auth', authRoute);

app.use(async(req, res, next) => {
    res.status(404).json('This route does not exist');
    next(createError.NotFound('This route does not exist'));
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message,
            status: err.status || 500
        }
    });
});

initDB(err => {
    if(!err){
        app.listen(config.server.PORT || 3000, () => {
            console.log(`Connected by PORT: ${config.server.PORT}`);
        });
    }else console.log(`Connection failed! ${err}`);
});