var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Comment = require ('../models/Comment');
var VerifyToken = require('../middleware/VerifyToken');

router.use(bodyParser.urlencoded({
	extended: true
}));

router.post('/', VerifyToken, function(req, res) {
	Comment.create({
			body: req.body.body,
			author: req.userId
		}, function(error, comment) {

			if (error) {
				return res.status(500).send("An error occurred while trying to add comment. Status code 500: Internal server error")
			} 
			else {
				return res.status(200).send({auth: true, comment: comment});	
			}

		});
})

router.get('/:id', function(req, res) {
	Comment.findById(req.params.id, function(error, comment) {
		if (error) {
			return res.status(500).send("An error occurred while getting comment info. Status code 500: Internal server error")
		} else {
			return res.status(200).send(comment);	
		}
	})
})

router.delete('/:id', function(req, res) {
	Comment.findByIdAndRemove(req.params.id, function(error, comment) {
		if (error) {
			return res.status(500).send("An error occurred while trying to remove comment. Status code 500: Internal server error")
		} else {
			return res.status(200).send("Comment " + comment.name + " was successfully deleted.");	
		}
	})
})

router.put('/:id', function(req, res) {
	Comment.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(error, comment) {
		if (error) {
			return res.status(500).send("An error occurred while trying to update comment. Status code 500: Internal server error")
		} else {
			return res.status(200).send("Comment " + comment.name + "was successfully updated. New comment info: ", comment);	
		}
	})
})

router.get('/all', VerifyToken, function(req, res) {
	Comment.find()
})

module.exports = router;

