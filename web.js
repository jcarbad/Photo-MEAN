var http = require("http");

var process_request = (req, res) => {
	var body = 'It Works! Thanks for calling!\n',
		content_length = body.length;
	res.writeHead(200, {
		'Content-Length': content_length,
		'Content-Type' : 'text/plain' 
	});
	res.end(body);
};

var s = http.createServer(process_request);
s.listen(8080);