var React = require('react');

// presentational component. 
// take props and render to screen
// thats it.
var GreeterMessage = React.createClass({
    render: function () {
        // again uses props. not state.
        var name = this.props.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
            </div>
        );
    }
});

// need to actually export
// to make this available
// this is kinda like a return.
// so now when someone requires this file
// they get the GreeterMessage component back.
module.exports = GreeterMessage;