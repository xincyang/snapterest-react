var React = require('react');

var Test = React.createClass({
	handleClick: function(e) {
		var textClick = this.props.onTextClick;
		if(textClick) {
			textClick();
		}

		e.stopPropagation();
		e.preventDefault();
	},
	componentWillMount: function() {
		console.log('componentWillMount() is running...');
	},
	render: function() {
		// <div onClick={this.handleClick}>{this.props.text}</div>
		return (
			<button onClick={this.handleClick}>{this.props.text}</button>
		);
	},
	componentWillUpdate: function() {
		console.log('componentWillUpdate() is running...');
	}
});

module.exports = Test;