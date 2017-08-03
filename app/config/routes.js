var React = require("react");

var router = require("react-router");

var Router = router.Router; // Include the Route component for displaying individual routes
var Route = router.Route; // Include the Router component to contain all our Routes
var hashHistory = router.hashHistory; // Include the hashHistory prop to handle routing client side without a server
var IndexRoute = router.IndexRoute; // Include the IndexRoute (catch-all route)

var Main = require("../components/Main");
var Search = require("../components/Search");

module.exports = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>

        </Route>
        <indexRout component={Search}/>
    </Router>
)