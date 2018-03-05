var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require ('../models/User');

router.use(bodyParser.urlencoded({
	extended: true
}));

router.get('/', function(req, res) {
	User.find({}, function(error, users) {
		if (error) {
			return res.status(500).send("An error occurred while getting all users. Status code 500: Internal server error")
		} else {
			return res.status(200).send(users);	
		}
	})
})

router.get('/:id', function(req, res) {
	User.findById(req.params.id, function(error, user) {
		if (error) {
			return res.status(500).send("An error occurred while getting user info. Status code 500: Internal server error")
		} else {
			return res.status(200).send(user);	
		}
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




