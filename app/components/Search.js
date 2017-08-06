var React = require("react");
var Link = require("react-router").Link;

var Query = require("./children/Query");
var Results = require("./children/Results");

export default class Search extends React.Component{

// function to set a state
// move states to main

    render(){
        return(
            <div>
                <Query data={this.props.data}/> 
                <Results />
            </div>
        )
    }
}