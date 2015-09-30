var router = require('./router.js');
var http = require('http');
// Requirement: We need to view a user's badge count and javascript points from a web browser
// Solution: Use nodejs for profile lookups and serve our template via http

//Create a web server
http.createServer(function(request, response) {
    router.home(request, response);
    router.user(request, response);
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');