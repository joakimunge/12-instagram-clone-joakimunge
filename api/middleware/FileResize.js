// var sharp = require('sharp')

function resizeFile(req, res, next) {
	console.log(req.file.path)
}

module.exports = resizeFile;