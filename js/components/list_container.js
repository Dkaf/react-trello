const React = require('react');
const ReactDOM = require('react-dom');
const List = require('./list');


let ListContainer = React.createClass({
	getInitialState: function() {
		return {
			inputText: '',
			cards: []
		}
	},

	onAddInputChanged: function(e) {
		this.setState({
			inputText: e.target.value
		});
	},

	onAddSubmit: function(e) {
		e.preventDefault();
		console.log('form submitted');
		this.setState({
			cards: this.state.cards.concat(this.state.inputText)
		});
		console.log(this.state.cards);
		e.target.reset();
	},

	render: function() {
		return (
			<List title={this.props.title} cards={this.state.cards} onSubmit={this.onAddSubmit} onChange={this.onAddInputChanged} />
		)
	}
});

module.exports = ListContainer;
