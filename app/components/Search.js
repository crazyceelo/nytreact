var React = require("react");
var Link = require("react-router").Link;

var Query = require("./children/Query");
var Results = require("./children/Results");

class Search extends React.Component{
    getInitialState(){
        // var searchTerm = "";
        // var numResults = 0;
        // var startYear = 0;
        // var endYear = 0;
    }

    render(){
        return(
            <div>
                <Query />
                <Results />
            </div>
        )
    }
}

module.exports = Search;