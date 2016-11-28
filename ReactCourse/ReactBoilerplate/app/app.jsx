var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
    name: 'erik',
    location: 'royal oak'
};

var objTwo = {
    age: '28',
    ...objOne
};

console.log(objTwo);

ReactDOM.render(
    <h1>Boilerplate app!</h1>,
    document.getElementById('app'));