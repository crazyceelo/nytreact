// server dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// require models schema
var Articles = require("./models/Article");

// create instance of express and set a port
var app = express();
var PORT = process.env.PORT || 3000;

// run morgan for logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// MongoDB configuration
mongoose.connect("mongodb://localhost/nyreact");
var db = mongoose.connection;

db.on("error", function(error){
    console.log("Mongoose Error: ", err);
});

db.once("open", function(){
    console.log("Mongoose connection successful.");
});

// /api/saved (get) - your components will use this to query MongoDB for all saved articles
// /api/saved (post) - your components will use this to save an article to the database
// /api/saved (delete) - your components will use this to delete a saved article in the database
    
/* * (get) - will load your single HTML page (with ReactJS) 
in public/index.html. Make sure you put this after all other GET routes */

// listener
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});