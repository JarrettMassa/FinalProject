//Dependencies
var express = require("express");
var bodyParser = require ("body-parser");

//Setup Express App
var app = express();
var PORT = process.env.PORT || 8080;

//requiring models for syncing
var db = require("./models");

//Setup Express App to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Static directory
app.use(express.static(__dirname + '/public'));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app,db);
require("./routes/seed-route.js")(app,db);

// =============================================================


// Sync models and then start Express app
//{ force: true }
db.connection.sync().then(function() {
    app.listen(PORT, function(){
        console.log("App listening on PORT " + PORT);
    });
});
