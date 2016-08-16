var React = require('react');

var Header = React.createClass({
	// getDefaultProps方法设置默认值，如果父组件没有传递this.props.text，则会使用默认值
	getDefaultProps: function() {
		return {
			text: 'Default header'
		};
	},
	render: function() {
		var headerStyle = {
			fontSize: '16px',
			fontWeight: '300',
			display: 'inline-block',
			margin: '20px 10pxp'
		};

		return (
			<h2 style={headerStyle}>{this.props.text}</h2>
		);
	}
});

module.exports = Header;