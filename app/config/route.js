var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var IndexRoute = ReactRouter.IndexRoute;

var hashHistory = ReactRouter.hashHistory;

var MainComponent = require('../components/Main');
var HomeComponent = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
var ResultsContainer = require('../containers/ResultsContainer');

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={MainComponent}>
            <IndexRoute component={HomeComponent} />
            <Route path='playerOne' header='Player One' component={PromptContainer} />
            <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
            <Route path='battle' component={ConfirmBattleContainer} />
            <Route path='results' component={ResultsContainer} />
        </Route>
    </Router>
);

module.exports = routes;
