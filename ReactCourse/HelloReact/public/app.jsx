var GreeterMessage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Some H1</h1>
                <p>Some paragraph</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    render: function () {
        return (
            <div>
                <form>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
});

// create react component
var Greeter = React.createClass({
    // get default props. these are different than state. components dont update their own props
    getDefaultProps: function () {
        return {name: 'React', message: 'u forgot message dummy'};
    },
    // similar to get default props
    // gets initial state for the component
    // in this case from the prop
    getInitialState: function () {
        return {name: this.props.name};
    },
    onButtonClick: function (e) {
        // prevent default to make sure no browser refresh
        // we are doing react spa things... so yeah....
        e.preventDefault();

        var nameRef = this.refs.name;
        var name = nameRef.value;
        // resets input box
        nameRef.value = '';

        // if simple validation validates do the thing.
        if (typeof name === 'string' && name.length > 0) {
            this.setState({name: name});
        }
    },
    render: function () {
        var name = this.state.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>
                    {message}
                </p>

                <GreeterMessage />

                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>

                <GreeterForm />
            </div>
        );
    }
});

var firstName = 'Erik';
var messageFromSomeDb = 'u remember message dummy';

ReactDOM.render(
    <Greeter name={firstName} message={messageFromSomeDb}/>, document.getElementById('app'));