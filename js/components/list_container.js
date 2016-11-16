var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');


var ListContainer = React.createClass({
	getInitialState: function() {
		return {
			inputText: '',
			cards: []
		}
	},

	onAddInputChanged: function(e) {
		console.log('input changed');
		this.setState({
			inputText: this.value
		});
		console.log(this.state.inputText);
	},

	onAddSubmit: function(e) {
		e.preventDefault();
		console.log('form submitted');
		this.setState({
			cards: this.state.cards.push(this.state.inputText)
		});
		console.log(this.state.cards);
	},

	render: function() {
		return (
			<List title={this.props.title} cards={this.state.cards} onSubmit={this.onAddSubmit} onChange={this.onAddInputChanged} />
		)
	}
});

module.exports = ListContainer;
