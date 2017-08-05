var React = require("react");

class Query extends React.Component{
    constructor(){
        super()

        this.state={
            term: "",
            number: 0,
            startingYear: "",
            endingYear: ""
        }
    }

    handleChangeTerm(event){
        this.setState({ term: event.target.value}); // this grabs the input
    }

    handleChangeNumber(event){
        this.setState({number: event.target.value});
    }

    handleChangeStartingYear(event){
        this.setState({startingYear: event.target.value});
    }

    handleChangeEndingYear(event){
        this.setState({endingYear: event.target.value});
    }

    handlSubmitTerm(event){
        event.preventDefault();

        this.props.setTerm(this.state.term);
        this.setState({ term: ""});
    }

    handleSubmitNumber(event){
        event.preventDefault();

        this.props.setRecords(this.state.number);
        this.setState({number: 0});
    }

    handleSubmitStartingYear(event){
        event.preventDefault();

        this.props.setStartingYear(this.state.startingYear);
        this.setState({startingYear: ""});
    }

    handleSubmitEndingYear(event){
        event.preventDevault();

        this.props.setEndingYear(this.state.endingYear);
        this.setState({endingYear: ""});
    }

    render(){
        return(
            <div className="container">
                	{/* <!-- Row for Searching New York Times --> */}
                <div className="row">
                    <div className="col-sm-12">
                    <br />
                        {/* <!-- First panel is for handling the search parameters --> */}
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>Search Parameters</strong></h3>
                            </div>
                            <div className="panel-body">

                                {/* <!-- Here we create an HTML Form for handling the inputs--> */}
                                <form role="form" 
                                onSubmit={this.handlSubmitTerm} 
                                onSubmit={this.handleSubmitNumber}
                                onSubmit={this.handleSubmitStartingYear}
                                onSubmit={this.handleSubmitEndingYear}
                                >

                                    {/* <!-- Here we create the text box for capturing the search term--> */}
                                    <div className="form-group">
                                        <label htmlFor="search">Search Term:</label>
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="term" 
                                        value={this.state.term}
                                        onChange={this.handleChangeTerm}
                                        required
                                        />
                                    </div>

                                    {/* <!-- Here we capture the number of records that the user wants to retrieve  --> */}
                                    <div className="form-group">
                                        <label htmlFor="pwd">Number of Records to Retrieve:</label>
                                        <select className="form-control" id="numRecordsSelect" >
                                            <option onChange={this.handleChangeNumber} value={this.state.number} >0</option>
                                            {/* <!-- Setting the option for 5 as default --> */}
                                        </select>			  
                                    </div>

                                    {/* <!-- Here we capture the Start Year Parameter--> */}
                                    <div className="form-group">
                                        <label htmlFor="startYear">Start Year (Optional):</label>
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="startYear" 
                                        onChange={this.handleChangeStartingYear}
                                        value={this.state.startingYear}
                                        />
                                    </div>

                                    {/* <!-- Here we capture the End Year Parameter --> */}
                                    <div className="form-group">
                                        <label htmlFor="endYear">End Year (Optional):</label>
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="endYear" 
                                        onChange={this.handleChangeEndingYear}
                                        value={this.state.endingYear}
                                        />
                                    </div>

                                    {/* <!-- Here we have our final submit button --> */}
                                    <button type="submit" className="btn btn-default" id="runSearch"><i className="fa fa-search"></i> Search</button>
                                    <button type="button" className="btn btn-default" id="clearAll"><i className="fa fa-trash"></i> Clear Results</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Query;