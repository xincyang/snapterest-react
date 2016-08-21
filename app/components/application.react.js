var React = require('react');
var ReactDOM = require('react-dom');
var Stream = require('./stream.react');
var Collection = require('./collection.react');

var App = React.createClass({
	render: function() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4">
						<Stream />
					</div>
					<div className="col-md-8">
						<Collection />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = App;