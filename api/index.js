var express = require('express');
var app = express();
var morgan = require('morgan');
var db = require('./db');

var UserController = require('./UserController');
app.use('/', function(req, res) {
	res.send('This is the API for 12-instagram-clone');
})
app.use('/users', UserController);
app.use(morgan('dev'));

module.exports = app;