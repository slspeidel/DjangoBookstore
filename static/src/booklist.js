//import React from 'react'
//import ReactDOM from 'react-dom'
var React = require('react');
var ReactDOM = require('react-dom');

// Make a functional React component (no state)
var items = {{stock|jsonify}};
function BookItems(props) {
    const itemList = items.map((item) =>
        <li key={item.toString()}>
            {item.title}
        </li>
    );
    return (
        <ul>{itemList}</ul>
    );
}

ReactDOM.render(
  <BookItems />,
  document.getElementById('bookapp')
);
