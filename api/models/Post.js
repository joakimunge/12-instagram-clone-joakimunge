var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	image: {type: String, minlength: [1, "An image url can't be empty"]},
	description: {type: String, minlength: [1, "Description can't be empty"]},
	author: {type: String},
	likes: {type: Array},
	comments: {type: Array},
	date: { type: Date, default: Date.now }
});

mongoose.model('Post', PostSchema);

module.exports = mongoose.model('Post');