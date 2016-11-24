const React = require('react');
const TestUtils = require('react-addons-test-utils');
const should = require('chai').should();

const List = require('../js/components/list');


describe('List component', function() {
	it('Renders a list containing cards', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<List title="test title" />)
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('list');

		let title = result.props.children[0];
		title.props.className.should.equal('list_title');
		title.type.should.equal('div');
		title.props.children.should.equal('test title');

		let cards = result.props.children[1];
		cards.props.className.should.equal('list_cards');
		cards.type.should.equal('div');

		let form = result.props.children[2];
		console.log(form.props.children)
		form.props.should.have.property('onSubmit');
		form.props.children.type.should.equal('input');


	});
});
