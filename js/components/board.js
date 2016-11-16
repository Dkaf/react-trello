var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');

var Board = function(props) {
	Board.defaultProps = { title: 'title' }
	return (
		<div className="board">

			<div className="board_title">
				{props.title}
			</div>

			<div className="board_list_titles">
				{props.lists}
			</div>
		</div>
	)
};

module.exports = Board;
