var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require ('../models/User');
var Post = require ('../models/Post');
var Comment = require ('../models/Comment');
var Like = require ('../models/Like');
var mongoose = require('mongoose');

var data = require('../data.json');

router.use(bodyParser.urlencoded({
	extended: true
}));

router.get('/', function(req, res) {
		//Drop collections
		User.collection.drop(function(err, res) {
			if (err) {
				return
			}
		});
		Post.collection.drop(function(err, res) {
			if (err) {
				return
			}
		});
		Comment.collection.drop(function(err, res) {
			if (err) {
				return
			}
		});
		Like.collection.drop(function(err, res) {
			if (err) {
				return
			}
		});

		//Seed users
		var manchildman = data.users.manchildman
		var joakim = data.users.joakim
		var tom = data.users.tom
		var axel = data.users.axel
		User.create(manchildman);
		User.create(joakim);
		User.create(tom);
		User.create(axel);

		//Seed posts
		var post1 = data.posts.post1
		var post2 = data.posts.post2
		var post3 = data.posts.post3
		var post4 = data.posts.post4
		Post.create(post1)
		Post.create(post2)
		Post.create(post3)
		Post.create(post4)

		res.status(200).send("Database seeded")
})

module.exports = router;