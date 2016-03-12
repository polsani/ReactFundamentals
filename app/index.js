var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/route');
/*
var HelloWorld = React.createClass({
    render: function () {
        return (
            <div> Hello World React {this.props.name} </div>
        )}
});*/

ReactDOM.render(
    routes,
    document.getElementById('app')
);