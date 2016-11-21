// create react component
var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'u forgot message dummy'
        };
    },
    render: function () {
        var name = this.props.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>
                    {message}
                </p>
            </div>
        );
    }
});

var firstName = 'Erik';
var messageFromSomeDb = 'u remember message dummy';

ReactDOM.render(
    <Greeter name={firstName} message={messageFromSomeDb} />,
    document.getElementById('app')
);