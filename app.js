// Requirement: We need to view a user's badge count and javascript points from a web browser
// Solution: Use nodejs for profile lookups and serve our template via http

//1. Create a web server

var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  setInterval(function(){
    response.write(new Date() + "\n");
  }, 1000);
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');

//2. Handle the searching
  //if url == "/" && GET
    //show search
  //if url == "/" && POST
    //show username

//3. Handle the GET request to get user's data in json format.
  //if url == "/..."
    //get json from treehouse
      //on "end"
        //show profile
      //on "error"
        //show error
//4. Populate the current template with user's data.
  //read from file and get a string
    //merge values into string
