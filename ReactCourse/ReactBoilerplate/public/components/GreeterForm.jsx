var React = require('react');

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

// again gotta do da export moves
module.exports = GreeterForm;