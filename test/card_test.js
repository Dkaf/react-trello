const React = require('react');
const TestUtils = require('react-addons-test-utils');
const should = require('chai').should();

const Card = require('../js/components/card');


describe('Card component', function() {
	it('Renders a single card', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<Card text="test"/>)
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('card_text');

		result.type.should.equal('div');
		result.props.children.should.equal('test');
	});
});
