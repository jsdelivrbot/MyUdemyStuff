// presentational component. 
// take props and render to screen
// thats it.
var GreeterMessage = React.createClass({
    render: function () {
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

// also presentational component
// does not maintain its own state.
// maintaining state is not its job.
var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        // prevent browser refresh
        e.preventDefault();

        // get name from rendered input box
        var name = this.refs.name.value;

        // simple validation
        if (name.length > 0) {
            // reset input field.
            this.refs.name.value = '';
            // actually change the state.
            // which will be re-rendered.
            this.props.onNewName(name);
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
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
        return {name: this.props.name};
    },
    handleNewName: function (name) {
       this.setState({
           name: name
       });
    },
    render: function () {
        var name = this.state.name;
        var message = this.props.message;

        // common naming convention here
        // method handlenewname prop onnewname
        // a great container component should only
        // render its children components
        // and not do a bunch of its own rendering.
        return (
            <div>
                <GreeterMessage name={name} message={message} />
                <GreeterForm onNewName={this.handleNewName} />
            </div>
        );
    }
});

var firstName = 'Erik';
var messageFromSomeDb = 'u remember message dummy';

ReactDOM.render(
    <Greeter name={firstName} message={messageFromSomeDb}/>, document.getElementById('app'));