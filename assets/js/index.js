var React = require('react');
var ReactDOM = require('react-dom');

var BookModule = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Welcome to our store!</h1>
            </div>
        )
    }
});

ReactDOM.render(
    <BookModule />,
    document.getElementById('bookapp')
);