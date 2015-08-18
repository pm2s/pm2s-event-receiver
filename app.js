var http = require('http');
var worque = require('worque');
var config = require('./config');

var client = new worque.Client(config.queue);

http.createServer(function(req, res) {
	var body = '';

	if(req.method == 'POST') {
		req.on('data', function(data) {
			body += data;
		});

		req.on('end', function() {
			client.publish(config.channel, {
				event: body
			});
			res.writeHead(200);
			res.end();
			console.log(body);
		});
	} else {
		res.writeHead(405);
		res.end();
	}

}).listen(config.server.port, function() {
	console.log('running on port ' + config.server.port);
});