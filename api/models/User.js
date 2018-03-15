var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
	username: {type: String, required: true, unique: true, minlength: [3, "Username must be at least 3 characters"]},
	name: {type: String, unique: true, required: true, maxlength: [100, "Too long name"]},
	email: {type: String, unique: true, required: true},
	password: {type: String, required: true, minlength: [8, "Too short password"]},
	avatar: {type: String, default: 'https://api.adorable.io/avatars/285/4@4.png'},
	description: {type: String, default: "is on Aperture! But.. why hasn't he written a description? :/"},
	posts: {type: Array},
	likes: {type: Array},
	comments: {type: Array}
});

UserSchema.plugin(uniqueValidator);

UserSchema.pre('save', function(next) {
	var user = this;
	var roundsOfHashing = 5;

	bcrypt.genSalt(roundsOfHashing, function(error, salt) {
		if (error) return next(error);

		bcrypt.hash(user.password, salt, function(error, hash) {
			if (error) return next(error);

			user.password = hash;
			next();
		});
	})
})

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');