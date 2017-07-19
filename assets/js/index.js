var React = require('react');
var ReactDOM = require('react-dom');


var BookModule = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h1>Welcome to our book store!</h1>
                    </div>
                    <div className="col-md-6 col-sm-12">
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