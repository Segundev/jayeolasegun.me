const http = require("http");

http.createServer(function(req, res){
	res.write("On my way to an engineer");
	res.end();
}).listen(3000);

console.log("server started")
