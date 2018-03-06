var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

var User = require('../models/User');

var config = require('../config');
var VerifyToken = require('../middleware/VerifyToken');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.post('/register', function(req, res) {
	User.findOne({email: req.body.email}, function(error, user) {
		if (error) {
			return res.status(500).send({ auth: false, error: error, message: 'Internal server error'});
		}
		
		if (user) {
			return res.status(409).send({auth: false, message: 'User already exists'});
		}

		User.create({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		}, function(error, user) {

			if (error) {
				return res.status(500).send("An error occurred while trying to register user. Status code 500: Internal server error")
			} 
			else {

				var token = jwt.sign({id: user._id}, config.secret, {
					expiresIn: 86400
				});

				return res.status(200).send({auth: true, token: token});	
			}

		});
	});
});

router.post('/login', function(req, res) {
	User.findOne({ email: req.body.email }, function (error, user) {
		if (error) {
			return res.status(500).send('Internal server error.');
		}

		if (!user) {
			return res.status(404).send({auth: false, token: null});
		}

		bcrypt.compare(req.body.password, user.password)
			.then(function(valid) {
				if (!valid) {
					return res.status(401).send({auth:false, token: null, message: 'Password invalid.'});
				}

				var token = jwt.sign({id: user._id}, config.secret, {
					expiresIn: 864000
				});

				return res.status(200).send({auth: true, user: user._id, token: token, })
		});
	});
});

router.get('/verify', VerifyToken, function(req, res) {
	User.findById(req.userId, {password: 0}, function(error, user) {
		if (error) {
			return res.status(500).send("Something went wrong when trying to get user.");
		}

		if (!user) {
			return res.status(404).send("No user found.");
		}

		res.status(200).send(user);
	})
})


module.exports = router;