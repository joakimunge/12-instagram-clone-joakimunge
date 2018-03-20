var express = require('express');
var morgan = require('morgan');
var db = require('./db');
var path   = require('path')
var cors = require('cors')
var app = express();

var UserController = require('./controllers/UserController');
var AuthController = require('./controllers/AuthController');
var PostController = require('./controllers/PostController');
var LikeController = require('./controllers/LikeController');
var CommentController = require('./controllers/CommentController');
var Seeder = require('./controllers/Seeder');
app.use(cors())
app.use(morgan('dev'));
app.use('/static', express.static(path.join(__dirname, '/uploads')));
// app.use(express.static('uploads'))
app.use('/users', UserController);
app.use('/comments', CommentController);
app.use('/likes', LikeController);
app.use('/auth', AuthController);
app.use('/posts', PostController);
app.use('/seed', Seeder);
module.exports = app;