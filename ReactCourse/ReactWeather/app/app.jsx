var React = require('react');
var ReactDOM = require('react-dom');

// fancy es6 destructuing syntax for the less typing of the things and stuff.
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');



ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>

        </Route>
    </Router>,
    document.getElementById('app'));