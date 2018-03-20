var app = require('./app');
require('dotenv').config();
var port = process.env.PORT || 3001;

var server = app.listen(port, function() {
	console.log('Express is now listening to port: ' + port);
});



