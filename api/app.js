var express = require('express');
var morgan = require('morgan');
var db = require('./db');
var app = express();

var UserController = require('./controllers/UserController');
var AuthController = require('./controllers/AuthController');
var PostController = require('./controllers/PostController');
var LikeController = require('./controllers/LikeController');
var CommentController = require('./controllers/CommentController');
var Seeder = require('./controllers/Seeder');

app.use(morgan('dev'));
app.use('/users', UserController);
app.use('/comments', CommentController);
app.use('/likes', LikeController);
app.use('/auth', AuthController);
app.use('/posts', PostController);
app.use('/seed', Seeder);

module.exports = app;