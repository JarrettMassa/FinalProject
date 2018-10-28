var path = require("path");

module.exports = function(app){

//Get function that will route to editlisting.js file so that HTML files can read it
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/html/index.html"));
    });

    app.get('/signup', function(req,res){
        res.sendFile(path.join(__dirname, "../public/assets/html/signup.html"));
    });

    app.get('/signin', function(req,res){
        res.sendFile(path.join(__dirname, "../public/assets/html/signin.html"));
    });

    app.get("/main", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/html/main.html"));
    });

    app.get("/about", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/html/about.html"));
    });
    
};