var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./button.react');
var Header = require('./header.react');
var CollectionStore = require('../stores/collectionstore');
var CollectionActionCreator = require('../actions/collectionactioncreator');

var inputStyle = {
	marginRight: '5px'
};

var CollectionRenameForm = React.createClass({
	getInitialState: function() {
		return {
			inputValue: CollectionStore.getCollectionName()
		};
	},
	componentDidMount: function() {
		// 很奇怪，这里不是ReactDOM.findDOMNode(this.refs.collectionName)，而是直接通过this.refs.collectionName取得DOM元素
		this.refs.collectionName.focus();
	},
	handleInputValueChange: function(e) {
		var inputValue = e.target.value;
		this.setState({
			inputValue: inputValue
		});
	},
	handleFormSubmit: function(e) {
		e.preventDefault();

		CollectionActionCreator.setCollectionName(this.state.inputValue);
		this.props.onCancelCollectionNameChange();
	},
	handleFormCancel: function(e) {
		e.preventDefault();

		var collectionName = CollectionStore.getCollectionName();
		this.setState({ inputValue: collectionName });
		this.props.onCancelCollectionNameChange();
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
	}
});

module.exports = CollectionRenameForm;