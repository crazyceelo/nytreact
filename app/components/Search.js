var React = require("react");
var Link = require("react-router").Link;

var Query = require("./children/Query");
var Results = require("./children/Results");

class Search extends React.Component{
    constructor(){
        super()

        this.state={
            term: "",
            records: 0,
            syear: 0,
            eyear: 0
        }
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