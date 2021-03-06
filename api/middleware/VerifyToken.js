var jwt = require('jsonwebtoken');
var config = require('../config');

function verifyToken(req, res, next) {
	var token = req.headers['x-access-token'];
	if (!token) {
		return res.status(403).send({auth:false, message: 'No token provided'});
	}

	jwt.verify(token, config.secret, function(error, decoded) {
		if (error) {
			return res.status(500).send({auth:false, message: 'Failed to authenticate.'});
		}

		req.userId = decoded.id;
		req.user = decoded;
		next();
	});
}

module.exports = verifyToken;