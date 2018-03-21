var express = require('express');
var morgan = require('morgan');
var db = require('./db');
var fs = require('fs');
var path = require('path')
var app = express();

var UserController = require('./controllers/UserController');
var AuthController = require('./controllers/AuthController');
var PostController = require('./controllers/PostController');
var LikeController = require('./controllers/LikeController');
var CommentController = require('./controllers/CommentController');
var Seeder = require('./controllers/Seeder');

app.use(morgan('dev'));

app.use('/api/static', express.static(path.join(__dirname, '/uploads')));

app.use('/api/users', UserController);
app.use('/api/comments', CommentController);
app.use('/api/likes', LikeController);
app.use('/api/auth', AuthController);
app.use('/api/posts', PostController);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

	var dir = './uploads';
	if (!fs.existsSync(dir)){
	    fs.mkdirSync(dir);
	}

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

module.exports = app;