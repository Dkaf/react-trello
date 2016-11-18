const React = require('react');
const ReactDOM = require('react-dom');
const Card = require('./card');


let Input = function(props) {
	return <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
};

let List = function(props) {
		return (
			<div className="list">
				<div className="list_title">
					{props.title}
				</div>
				<div className="list_cards">
					{props.cards}
				</div>
				<form onSubmit={props.onSubmit}>
					<Input type="text" placeholder="New card" onChange={props.onChange} />
				</form>
			</div>
		);
	};

module.exports = List;
