var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

// create react component
// specifically this is a container component
// maintains state and updates children
// remember state can be changed. props cannot.
var Greeter = React.createClass({
    // get default props. these are different than state. components dont update
    // their own props
    getDefaultProps: function () {
        return {name: 'React', message: 'u forgot message dummy'};
    },
    // similar to get default props gets initial state for the component in this
    // case from the prop
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },
    handleNewData: function (updates) {
        // can pass updates object right into setState.
        // this fixes the clearning bug i was having...
       this.setState(updates);
    },
    render: function () {
        var name = this.state.name;
        var message = this.state.message;

        // common naming convention here
        // method handlenewname prop onnewname
        // a great container component should only
        // render its children components
        // and not do a bunch of its own rendering.
        return (
            <div>
                <GreeterMessage name={name} message={message} />
                <GreeterForm onNewData={this.handleNewData} />
            </div>
        );
    }
});

module.exports = Greeter;