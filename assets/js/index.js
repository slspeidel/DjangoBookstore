var React = require('react');
var ReactDOM = require('react-dom');


var BookModule = React.createClass({
    render: function() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h1>Welcome to our book store!</h1>
                    </div>
                    <div class="col-md-6">
                        <p className="lead">We have many elegant tomes!</p>
                        <button className="btn btn-succeed">button</button>
                    </div>
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <BookModule />,
    document.getElementById('bookapp')
);