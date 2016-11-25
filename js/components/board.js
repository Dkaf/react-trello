const React = require('react');
const ReactDOM = require('react-dom');
const ListContainer = require('./list_container');

let listArray = [
	0:{
		title: 'List One'
	},
	1:{
		title: 'List Two'
	},
	2:{
		title: 'List Three'
	}
];

let listElements = listArray.map(list =>
	<ListContainer key={list.id} title={list.title} />
);

var Board = function(props) {
	Board.defaultProps = { title: 'title' }
	return (
		<div className="board">

			<div className="board_title">
				{props.title}
			</div>

			<div className="board_list_titles">
				{listElements}
			</div>
		</div>
	)
};

module.exports = Board;
