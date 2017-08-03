var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String
    },

    date: {
        type: Date
    },

    url: {
        type: HTMLLinkElement
    }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;