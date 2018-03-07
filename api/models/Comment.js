var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	body: {type: String, minlength: [1, "A comment can't be empty"]},
	author: {type: String}
});

mongoose.model('Comment', CommentSchema);

module.exports = mongoose.model('Comment');