var React = require('react');
var Tweet = require('./tweet.react');

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
	getTweetElement: function(tweetId) {
		var tweet = this.props.tweets[tweetId];
		var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;
		var tweetElement;
		if(handleRemoveTweetFromCollection) {
			tweetElement = (<Tweet tweet={tweet} onImageClick={handleRemoveTweetFromCollection} />);
			return (
				// key属性来确定每个动态创建的子元素（性能上的优化）
				<li style={listItemStyle} key={tweet.id}>{tweetElement}</li>
			);
		}
	},
	render() {

	}
});

module.exports = TweetList;