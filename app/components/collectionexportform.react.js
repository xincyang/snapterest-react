var React = require('react');

var formStyle = {
	display: 'inline-block'
};

var CollectionExportForm = React.creatClass({
	render: function() {
		return (
			<form action="http://codepen.io" method="post" target="_blank" style={formStyle}>
				<input type="hidden" name="data" value={this.props.htmlMarkup} />
				<button type="submit" className="btn btn-default">Export as HTML</button>
			</form>
		);
	}
});

module.exports = CollectionExportForm;