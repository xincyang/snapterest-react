jest.dontMock('../button.react');

describe('Button component', function() {
	it('calls handler function on click', function() {
		var React = require('react');
		var TestUtils = require('react-addons-test-utils');
		var Button = require('../button.react');
		var handleClick = jest.genMockFunction();
		var button = TestUtils.renderIntoDocument(<Button handleClick={handleClick} />);
		var buttonInstance = TestUtils.findRenderedDOMComponentWithTag(button, 'button');
		TestUtils.Simulate.click(buttonInstance);
		expect(handleClick).toBeCalled();
		// mock属性保存了模拟函数被调用时的数据；calls是一个数组，模拟函数所有的调用
		var numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;
		expect(numberOfCallsMadeIntoMockFunction).toBe(1);
	});
});