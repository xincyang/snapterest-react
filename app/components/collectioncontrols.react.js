var React = require('React');
var CollectionRenameForm = require('./collectionrenameform.react');
var Header = require('./header.react');
var CollectionExportForm = require('./collectionexportform.react');
var Button = require('./button.react');
var CollectionStore = require('../stores/collectionstore');
var CollectionActionCreator = require('../actions/collectionactioncreator');

var CollectionControls = React.createClass({
	getInitialState: function() {
		return {
			isEditingName: false
		};
	},
	getHeaderText: function() {
		var numberOfTweetsInCollection = this.props.numberOfTweetsInCollection;
		var text = numberOfTweetsInCollection;
		var name = CollectionStore.getCollectionName();
		if(text === 1) {
			text = text + ' tweet in your';
		} else {
			text = text + ' tweets in your';
		}
		return (
			<span>
				{text} <strong>{name}</strong> collection
			</span>
		);
	},
	toggleEditCollectionName: function() {
		this.setState({
			isEditingName: !this.state.isEditingName
		});
	},
	removeAllTweetsFromCollection: function() {
		CollectionActionCreator.removeAllTweetsFromCollection();
	},
	render() {
		if(this.state.isEditingName) {
			return (
				<CollectionRenameForm onCancelCollectionNameChange={this.toggleEditCollectionName} />
			);
		}
		return (
			<div>
				<Header text={this.getHeaderText()} />
				<Button label="Rename collection" handleClick={this.toggleEditCollectionName} />
				<Button label="Empty collection" handleClick={this.removeAllTweetsFromCollection} />
				<CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
			</div>
		);
	}
});

module.exports = CollectionControls;