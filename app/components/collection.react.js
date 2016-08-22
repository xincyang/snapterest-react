var React = require('react');
var ReactDOMServer = require('react-dom/server');
var CollectionControls = require('./collectioncontrols.react');
var TweetList = require('./tweetlist.react');
var Header = require('./header.react');
var CollectionUtils = require('../utils/collectionutils');
var CollectionStore = require('../stores/collectionstore');

var Collection = React.createClass({
	getInitialState: function() {
		return {
			collectionTweets: CollectionStore.getCollectionTweets()
		};
	},
	componentDidMount: function() {
		CollectionStore.addChangeListener(this.onCollectionChange);
	},
	componentWillUnmount: function() {
		CollectionStore.removeChangeListener(this.onCollectionChange);
	},
	onCollectionChange: function() {
		this.setState({
			collectionTweets: CollectionStore.getCollectionTweets()
		});
	},
	createHtmlMarkupStringOfTweetList: function() {
		var htmlString = ReactDOMServer.renderToStaticMarkup(<TweetList tweets={this.state.collectionTweets} />);
		var htmlMarkup = {
			html: htmlString
		};
		return JSON.stringify(htmlMarkup);
	},
	render: function() {
		var collectionTweets = this.state.collectionTweets;
		var numberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweets);
		if(numberOfTweetsInCollection > 0) {
			
			var htmlMarkup = this.createHtmlMarkupStringOfTweetList();
			// 由于react只允许有一个根元素，所以用div来包裹CollectionControls和TweetList组件
			return (
				<div>
					<CollectionControls numberOfTweetsInCollection={numberOfTweetsInCollection} htmlMarkup={htmlMarkup} />
					<TweetList tweets={collectionTweets} />
				</div>
			);
		}
		return (
			<Header text="Your collection is empty" />
		);
	}
});

module.exports = Collection;