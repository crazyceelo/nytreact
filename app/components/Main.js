var React = require("react");
var router = require("react-router");
import { HashRouter as Router, Route } from 'react-router-dom';

import Search from "./Search";
import Saved from "./Saved";

export default class Main extends React.Component {
    constructor(props){
        super(props)

        this.state={
            searchTerm: "term test",
            records: 0,
            syear: "syear test",
            eyear: "eyear test",
            results: "",
            savedArticles: ""
        }
    }

    // componentDidUpdate(){
    //     helpers.runQuery(this.state.searchTerm, this.state.records, this.state.syear, this.state.eyear)
    //     .then((data)=>{
    //         if (data !== this.state.results){
    //             this.setState({results: data});
    //         }
    //     })
    // }

    // handleChange(event){
    //     this.setState({ 
    //         [event.target.id]: event.target.value
    //     });
    // }

    // handleSubmit(event){
    //     event.preventDefault();

    //     this.props.setTerm(this.state.term);
    //     this.props.setRecords(this.state.number);
    //     this.props.setStartingYear(this.state.startingYear);
    //     this.props.setEndingYear(this.state.endingYear);
    // }

    // setTerm(term){
    //     this.setState({searchTerm: term});
    // }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron">
                            <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Route path="/" render={()=><Search data={this.state}/>}/>
                    <Route path="/saved" component={Saved} />
                </div>
            </div>    
        )
    }
}

module.exports = Main;
