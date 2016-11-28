var React = require('react');
var ReactDOM = require('react-dom');

// fancy es6 destructuing syntax for the less typing of the things and stuff.
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="about" component={About}/>
        <Route path="examples" component={Examples}/>
        <IndexRoute component={Weather}/>
    </Route>
</Router>, document.getElementById('app'));