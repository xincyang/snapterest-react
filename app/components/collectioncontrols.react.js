var React = require('React');
var CollectionRenameForm = require('./collectionrenameform.react');
var Header = require('./header.react');
var CollectionExportForm = require('./collectionexportform.react');
var Button = require('./button.react');


var CollectionControls = React.createClass({
	setCollectionName: function(name) {
		this.setState({
			name: name,
			isEditingName: false
		});
	},
	toggleEditCollectionName: function() {
		this.setState({
			isEditingName: !this.state.isEditingName
		});
	},
	getInitialState() {
		return {
			name: 'new',
			isEditingName: false
		};
	},
	getHeaderText: function() {
		var numberOfTweetsInCollection = this.props.numberOfTweetsInCollection;
		var text = numberOfTweetsInCollection;
		if(text === 1) {
			text = text + ' tweet in your';
		} else {
			text = text + ' tweets in your';
		}
		return (
			<span>
				{text} <strong>{this.state.name}</strong> collection
			</span>
		);
	},
	render() {
		if(this.state.isEditingName) {
			return (
				<CollectionRenameForm name={this.state.name} onChangeCollectionName={this.setCollectionName} onCancelCollectionNameChange={this.toggleEditCollectionName} />
			);
		}
		return (
			<div>
				<Header text={this.getHeaderText()} />
				<Button label="Rename collection" handleClick={this.toggleEditCollectionName} />
				<Button label="Empty collection" handleClick={this.props.onRemoveAllTweetsFromCollection} />
				<CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
			</div>
		);
	}
});

module.exports = CollectionControls;