/**
 * Module dependencies.
 */
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/**
 * Mongoose Data Base
 */
require('./Express/Mongo')();

/**
 * Express SetUp
 */ 
var app = express();
app.use(express.static(path.join(__dirname, '../View/public')));
app.set('views', path.join(__dirname, '../View/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

/**
 * Passport
 */
require('./Express/Passport')(app);

/**
 * Routers init
 */
require('./Express/Routers')(app); 

/**
 * Error handeling
 */
require('./Express/ErrHundler')(app);

module.exports = app;