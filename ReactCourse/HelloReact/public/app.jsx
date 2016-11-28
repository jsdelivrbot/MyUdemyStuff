var React = require('react');
var ReactDOM = require('react-dom');
var GreeterMessage = require('./components/GreeterMessage');

// also presentational component
// does not maintain its own state.
// maintaining state is not its job.
var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        // prevent browser refresh
        e.preventDefault();

        // get name from rendered input box
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        var updates = {};

        // simple validation
        if (name.length > 0) {
            // reset input field.
            this.refs.name.value = '';
            // pass variable to updates object
            updates.name = name;
        }

        if (message.length > 0) {
            // reset textarea
            this.refs.message.value = '';
            // pass variable to updates object.
            updates.message = message;
        }

        this.props.onNewData(updates);
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div><input type="text" ref="name" placeholder="enter name"/></div>
                    <div><textarea ref="message" placeholder="enter message"></textarea></div>
                    <div><button>Submit</button></div>
                </form>
            </div>
        );
    }
});

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

var firstName = 'Erik';

ReactDOM.render(
    <Greeter name={firstName} />, document.getElementById('app'));