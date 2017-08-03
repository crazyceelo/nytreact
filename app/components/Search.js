var React = require("react");
var Link = require("react-router").Link;

var Query = require("./children/Query");
var Results = require("./children/Results");

class Search extends React.Component{
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