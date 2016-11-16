var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var List = function(props) {
	return (
		<div className="list">
			<div className="list_title">
				{props.title}
			</div>
			<div className="list_cards">
				{props.cards}
			</div>
		</div>
	)
};

module.exports = List;
