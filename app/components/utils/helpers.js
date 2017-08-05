import Axios from "axios";

// nytimes auth key
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var helper = {

    runQuery: function(term, records, syear, eyear){
        // console.log(`term: ${term}`);
        // console.log(`records: ${records}`);
        // console.log(`syear: ${syear}`);
        // console.log(`eyear: ${eyear}`);

        var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authKey}&q=${term}&begin_date=${syear}0101&end_date=${eyear}1230&page=${records}`;
        return Axios.get(queryURL).then(function(response){
            console.log(response);
        }.bind(this));
    },

    getHistory: function(){
        return Axios.get("/api");
    },

    postHistory: function(){
        return Axios.post("/api", )
    }
}

module.exports - helper;