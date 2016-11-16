var React = require('react');
var ReactDOM = require('react-dom');

var Card = function() {
	var text = 'This is a card'
	return (
		<div className ="card_text">
			{text}
		</div>
	)
};

module.exports = Card;
