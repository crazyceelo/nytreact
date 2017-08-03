// server dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// require models schema
var Articles = require("./models/Articles");

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

// listener
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});