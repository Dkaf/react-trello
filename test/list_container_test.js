const React = require('react');
const TestUtils = require('react-addons-test-utils');
const should = require('chai').should();

const ListContainer = require('../js/components/list_container');

describe('List container', function() {
	it('Contains state for lists', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<ListContainer />)
		const result = renderer.getRenderOutput();
	});
});
