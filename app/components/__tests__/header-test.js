jest.dontMock('../header.react');
describe('header component', function() {
	it('render provider header text', function() {
		var React = require('react');
		var ReactDOM = require('react-dom');
		var TestUtils = require('react-addons-test-utils');
		var Header = require('../header.react');

		// TestUtils.renderIntoDocument()返回组件的引用
		var header = TestUtils.renderIntoDocument(<Header text="Testing..."/>);
		var actualHeaderText = ReactDOM.findDOMNode(header).textContent;
		var expectedHeaderText = "Testing...";
		expect(actualHeaderText).toBe(expectedHeaderText);

		var defaultHeader = TestUtils.renderIntoDocument(<Header />);
		var actualHeaderDefaultText = ReactDOM.findDOMNode(defaultHeader).textContent;
		var expectedHeaderDefaultText = 'Default header';
		expect(actualHeaderDefaultText).toBe(expectedHeaderDefaultText);
	});
});