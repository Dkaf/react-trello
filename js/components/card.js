var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props) {
	var text = 'This is a card'
	return (
		<div className ="card_text">
			{props.text}
		</div>
	)
};

module.exports = Card;
