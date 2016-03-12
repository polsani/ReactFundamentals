var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var IndexRoute = ReactRouter.IndexRoute;

var hashHistory = ReactRouter.hashHistory;

var MainComponent = require('../components/Main');
var HomeComponent = require('../components/Home');

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={MainComponent}>
            <Route path='/home' component={HomeComponent} />
        </Route>
    </Router>
);

module.exports = routes;