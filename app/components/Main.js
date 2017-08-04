var React = require("react");
var router = require("react-router");
import { HashRouter as Router, Route } from 'react-router-dom';

import Search from "./Search";
import Saved from "./Saved";

export default class Main extends React.Component {
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
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron">
                            <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Route path="/" render={()=><Search test={this.state.syear} />}/>
                    <Route path="/saved" component={Saved} />
                </div>
            </div>
            
        )
    }
}

module.exports = Main;
