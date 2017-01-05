// blah
setTimeout(function(){
	console.log("I've done my work! (after 2.5s)");
}, 2500);

console.log("I'm waiting till all my work is done...");


console.log("\n\tNEW ASYNCH FUNCTIONS\n");

/* ----------------------------------------
/* 
	As fs.open is asynchronous, it returns immediately, before file is opened.
	Thus, the file var is still undefined when execution reaches the fs.read
//* /*
var fs = require('fs'); // this is new, see explanation
var file;

var buf = new Buffer(100000);
fs.open('info.txt', 'r', function(handle){
	file = handle
});



fs.read(file, buffer, 0, 100000, null, function(){ // This will generate an error
	console.log(buf.toString());
	file.close(file, function(){
		console.log("...Dont care...");
	});
});
 */

 var fs = require("fs");

fs.open('info.txt', 'r', function(err, handle){
	if (err) {
		console.log("ERROR: " + err.code + " (" + err.message + ")");
		return;
	}

	var buf = new Buffer(100000);
	fs.read(handle, buf, 0, 100000, null, function(err, length){
		if (err) {
		console.log("ERROR: " + err.code + " (" + err.message + ")");
		return;
		}

		console.log(buf.toString('utf8',0, length));
		fs.close(handle, function(){
			console.log(".....Dont care.....");
		});
	});
});
