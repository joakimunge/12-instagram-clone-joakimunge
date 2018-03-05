var express = require('express');
var morgan = require('morgan');
var db = require('./db');
var app = express();

var UserController = require('./controllers/UserController');
var AuthController = require('./controllers/AuthController');

app.use(morgan('combined'));
app.use('/users', UserController);
app.use('/auth', AuthController);

module.exports = app;