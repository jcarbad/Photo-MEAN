/**
	This file intentionally contains a misspelling. The idea
	is to use the node-native debugger and find the error.
*/

var http = require("http");

var process_request = (req, res) => {
	var body = 'It Works! Thanks for calling!\n',
		content_length = body.lenggth;
	res.writeHead(200, {
		'Content-Length': content_length,
		'Content-Type' : 'text/plain' 
	});
	res.end(body);
};

var s = http.createServer(process_request);
s.listen(8080);