var React = require("react");



class Main extends React.Component {
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
            </div>
        )
    }
}

module.exports = Main;
