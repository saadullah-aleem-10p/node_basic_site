var Profile = require("./profile.js");
var  renderer = require("./renderer.js");

//Handle the searching
function home(request, response) {
  //if url == "/" && GET
    if (request.url === "/") {
    //show search
        response.writeHead(200, {'Content-Type' : 'text/plain'});
        renderer.view("header", {}, response);
        renderer.view("search", {}, response);
        renderer.view("footer", {}, response);
    }
  //if url == "/" && POST
    //show username
}


//Handle the GET request to get user's data in json format.
function user(request, response) {
    //if url == "/..."
    var userName = request.url.replace("/", "");
    if (userName.length > 0) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        renderer.view("header", {}, response);

        //get JSON from treehouse
        var studentProfile = new Profile(userName);
        //on "end"
        studentProfile.on("end", function (ProfileJSON) {
            //show profile

            //store values that we need
            var values = {
                avatarUrl: ProfileJSON.gravatar_url,
                userName: ProfileJSON.profile_name,
                badges: ProfileJSON.badges.length,
                javascriptPoints: ProfileJSON.points.JavaScript
            };
            //simple response
            renderer.view("profile", values, response);
            renderer.view("footer", {}, response);
            response.end();
        });
        //on "error"
        studentProfile.on("error", function (error) {
            //show error
            renderer.view("error", {errorMessage: error.message}, response);
            renderer.view("search", {}, response);
            renderer.view("footer", {}, response);
            response.end();
        });

    }



}

module.exports.home = home;
module.exports.user = user;