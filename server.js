// server dependencies
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import mongoose from "mongoose";

// require models schema
import Articles from "./models/Articles";

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