const React = require('react');
const TestUtils = require('react-addons-test-utils');
const should = require('chai').should();

const Board = require('../js/components/board');

describe('Board', function() {
	it('Renders a board', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<Board title="test board" />)
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('board');

		let title = result.props.children[0];
		title.props.className.should.equal('board_title');
		title.props.children.should.equal('test board');

		let boardLists = result.props.children[1];
		boardLists.props.className.should.equal('board_list_titles');
		boardLists.props.children.should.have.lengthOf(3);
	});
});
