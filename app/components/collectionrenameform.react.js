var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./button.react');
var Header = require('./header.react');

var inputStyle = {
	marginRight: '5px'
};

var CollectionRenameForm = React.createClass({
	handleInputValueChange: function(e) {
		var inputValue = e.target.value;
		this.setState({
			inputValue: inputValue
		});
		e.stopPropagation();
		e.preventDefault();
	},
	handleFormSubmit: function(e) {
		this.props.onChangeCollectionName(this.state.inputValue);
		e.stopPropagation();
		e.preventDefault();
	},
	handleFormCancel: function(e) {
		var collectionName = this.props.name;
		this.setState({ inputValue: collectionName });
		this.props.onCancelCollectionNameChange();
		e.stopPropagation();
		e.preventDefault();
	},
	getInitialState: function() {
		return {
			inputValue: this.props.name
		};
	},
	render: function() {
		return (
			<form className="form-inline" onSubmit={this.handleSubmit}>
				<Header text="Collection name:" />
				<div className="form-group">
					<input className="form-control" style={inputStyle} onChange={this.handleInputValueChange} value={this.state.inputValue} ref="collectionName" />
				</div>
				<Button label="Change" handleClick={this.handleFormSubmit} />
				<Button label="Cancel" handleClick={this.handleFormCancel} />
			</form>
		);
	},
	componentDidMount: function() {
		// 很奇怪，这里不是ReactDOM.findDOMNode(this.refs.collectionName)，而是直接通过this.refs.collectionName取得DOM元素
		this.refs.collectionName.focus();
	}
});

module.exports = CollectionRenameForm;