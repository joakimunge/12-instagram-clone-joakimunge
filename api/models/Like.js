var mongoose = require('mongoose');

var LikeSchema = new mongoose.Schema({
	author: {type: String}
});

mongoose.model('Like', LikeSchema);

module.exports = mongoose.model('Like');