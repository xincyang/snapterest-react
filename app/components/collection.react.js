var React = require('react');
var ReactDOMServer = require('react-dom/server');
var CollectionControls = require('./collectioncontrols.react');
var TweetList = require('./tweetlist.react');
var Header = require('./header.react');

var Collection = React.createClass({
	createHtmlMarkupStringOfTweetList: function() {
		var htmlString = ReactDOMServer.renderToStaticMarkup(<TweetList tweets={this.props.tweets} />);
		var htmlMarkup = {
			html: htmlString
		};
		return JSON.stringify(htmlMarkup);
	},
	getListOfTweetIds: function() {
		return Object.keys(this.props.tweets);
	},
	getNumberOfTweetsInCollection: function() {
		return this.getListOfTweetIds().length;
	},
	render: function() {
		var numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();
		if(numberOfTweetsInCollection > 0) {
			var tweets = this.props.tweets;
			var removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
			var removeTweetFromCollection = this.props.onRemoveTweetFromCollection;
			var htmlMarkup = this.createHtmlMarkupStringOfTweetList();
			// 由于react只允许有一个根元素，所以用div来包裹CollectionControls和TweetList组件
			return (
				<div>
					<CollectionControls numberOfTweetsInCollection={numberOfTweetsInCollection} htmlMarkup={htmlMarkup} onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection} />
					<TweetList tweets={tweets} onRemoveTweetFromCollection={removeTweetFromCollection} />
				</div>
			);
		}
		return (
			<Header text="Your collection is empty" />
		);
	}
});

module.exports = Collection;