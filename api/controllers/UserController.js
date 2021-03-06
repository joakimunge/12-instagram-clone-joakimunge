var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require ('../models/User');
var Post = require ('../models/Post');

router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());

router.get('/', function(req, res) {
	User.find({}, function(error, users) {
		if (error) {
			return res.status(500).send("An error occurred while getting all users. Status code 500: Internal server error")
		} else {
			return res.status(200).send(users);	
		}
	})
})

router.get('/:username', function(req, res) {
	User.findOne({ username: req.params.username }, {password: 0}, function(error, user) {
		if (error) return res.status(500).send("An error occurred while getting user info. Status code 500: Internal server error")

		if (!user) return res.status(500).send("Could not find user");

		Post.find()
			.where('_id')
			.in(user.posts)
			.populate('author')
			.exec(function(error, posts) {
				res.send({auth: true, user: user, posts: posts});
			})
	})
})

router.delete('/:id', function(req, res) {
	User.findByIdAndRemove(req.params.id, function(error, user) {
		if (error) {
			return res.status(500).send("An error occurred while trying to remove user. Status code 500: Internal server error")
		} else {
			return res.status(200).send("User " + user.name + " was successfully deleted.");	
		}
	})
})

router.put('/:id', function(req, res) {
	User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(error, user) {
		if (error) {
			return res.status(500).send("An error occurred while trying to update user. Status code 500: Internal server error")
		} else {
			return res.status(200).send("User " + user.name + "was successfully updated. New user info: ", user);	
		}
	})
})

module.exports = router;




