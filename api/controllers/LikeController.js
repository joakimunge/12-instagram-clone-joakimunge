var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Like = require ('../models/Like');
var Post = require ('../models/Post');
var VerifyToken = require('../middleware/VerifyToken');

router.use(bodyParser.urlencoded({
	extended: true
}));

router.post('/', VerifyToken, function(req, res) {
	Like.create({
			author: req.userId
		}, function(error, like) {
			if (error) {
				return res.status(500).send("An error occurred while trying to add like. Status code 500: Internal server error")
			} 
			else {
				return res.status(200).send({auth: true, like: like});	
			}
		}
	);
})

router.get('/:id', function(req, res) {
	Like.findById(req.params.id, function(error, like) {
		if (error) {
			return res.status(500).send("An error occurred while getting like info. Status code 500: Internal server error")
		} else {
			return res.status(200).send(like);	
		}
	})
})

router.delete('/:id', function(req, res) {
	Like.findByIdAndRemove(req.params.id, function(error, like) {
		if (error) {
			return res.status(500).send("An error occurred while trying to remove like. Status code 500: Internal server error")
		} else {
			return res.status(200).send("like " + like.name + " was successfully deleted.");	
		}
	})
})

router.put('/:id', function(req, res) {
	Like.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(error, like) {
		if (error) {
			return res.status(500).send("An error occurred while trying to update like. Status code 500: Internal server error")
		} else {
			return res.status(200).send("like " + like.name + "was successfully updated. New like info: ", like);	
		}
	})
})

module.exports = router;