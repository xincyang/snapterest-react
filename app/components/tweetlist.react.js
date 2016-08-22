var React = require('react');
var Tweet = require('./tweet.react');
var CollectionActionCreator = require('../actions/collectionactioncreators');

var listStyle = {
	padding: '0px'
};

var listItemStyle = {
	display: 'inline-block',
	listStyle: 'none'
};

var TweetList = React.createClass({
	getListOfTweetIds: function() {
		return Object.keys(this.props.tweets);
	},
	removeTweetFromCollection: function(tweet) {
		CollectionActionCreator.removeTweetFromCollection(tweet.id);
	},
	getTweetElement: function(tweetId) {
		var tweet = this.props.tweets[tweetId];
		var handleRemoveTweetFromCollection = this.removeTweetFromCollection;
		var tweetElement;
		if(handleRemoveTweetFromCollection) {
			tweetElement = (<Tweet tweet={tweet} onImageClick={handleRemoveTweetFromCollection} />);			
		} else {
			tweetElement = <Tweet tweet={tweet} />;
		}
		return (
			// key属性来确定每个动态创建的子元素（性能上的优化）
			<li style={listItemStyle} key={tweet.id}>{tweetElement}</li>
		);
	},
	render() {
		var tweetElements = this.getListOfTweetIds().map(this.getTweetElement);
		return (
			<ul style={listStyle}>
				{stweetElements}
			</ul>
		);
	}
});

module.exports = TweetList;