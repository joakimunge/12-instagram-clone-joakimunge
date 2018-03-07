var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
	name: {type: String, maxlength: [100, "Too long name"]},
	email: String,
	password: {type: String, minlength: [8, "Too short password"]},
	posts: {type: Array},
	likes: {type: Array},
	comments: {type: Array}
});

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