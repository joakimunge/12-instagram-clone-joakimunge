var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Post = require ('../models/Post');
var VerifyToken = require('../middleware/VerifyToken');

router.use(bodyParser.urlencoded({
	extended: true
}));

router.post('/', VerifyToken, function(req, res) {
	Post.create({
			image: req.body.image,
			description: req.body.description,
			author: req.userId,
			likes: [],
			comments: []
		}, function(error, post) {

			if (error) {
				return res.status(500).send("An error occurred while trying to add post. Status code 500: Internal server error")
			} 
			else {
				return res.status(200).send({auth: true, post: post});	
			}

		});
})

router.get('/:id', VerifyToken ,function(req, res) {
	Post.findById(req.params.id, function(error, post) {
		if (error) {
			return res.status(500).send("An error occurred while getting post info. Status code 500: Internal server error")
		} else {
			return res.status(200).send(post);	
		}
	})
})

router.delete('/:id', VerifyToken, function(req, res) {
	Post.findByIdAndRemove(req.params.id, function(error, post) {
		if (error) {
			return res.status(500).send("An error occurred while trying to remove post. Status code 500: Internal server error")
		} else {
			return res.status(200).send("post " + post.name + " was successfully deleted.");	
		}
	})
})

router.put('/:id', VerifyToken, function(req, res) {
	Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(error, post) {
		if (error) {
			return res.status(500).send("An error occurred while trying to update post. Status code 500: Internal server error")
		} else {
			return res.status(200).send("post " + post.name + "was successfully updated. New post info: ", post);	
		}
	})
})

module.exports = router;