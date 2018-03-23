var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
	image: {type: String, minlength: [1, "An image url can't be empty"]},
	description: {type: String, minlength: [1, "Description can't be empty"]},
	author: {type: Schema.Types.ObjectId, ref: 'User'},
	likes: {type: Array},
	comments: {type: Array},
	date: { type: Date, default: Date.now },
	type: { type: String }
});

mongoose.model('Post', PostSchema);

module.exports = mongoose.model('Post');