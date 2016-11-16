var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');


var Input = function(props) {
	return <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
};


var List = React.createClass({

	onAddInputChanged: function() {
		console.log('input changed');
	},

	onAddSubmit: function(e) {
		e.preventDefault();
		console.log('form submitted');
	},

	render: function(props) {
		return (
			<div className="list">
				<div className="list_title">
					{this.props.title}
				</div>
				<div className="list_cards">
					{this.props.cards}
				</div>
				<form onSubmit={this.onAddSubmit}>
					<Input type="text" placeholder="New card" onChange={this.onAddInputChanged}/>
				</form>
			</div>
		);
	}
});

module.exports = List;
