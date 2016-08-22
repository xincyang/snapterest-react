var React = require('react');
var Tweet = require('./tweet.react');
var Header = require('./header.react');
var CollectionActionCreator = require('../actions/collectionactioncreators');

var StreamTweet = React.createClass({
	getInitialState: function() {
		return {
			numberOfCharactersIsIncreasing: null,
			headerText: null
		}
	},
	// 在componentWillMount中
	componentWillMount: function() {
		this.setState({
			numberOfCharactersIsIncreasing: true,
			headerText: 'Latest public photo from twitter'
		});
		window.snapterest = {
			numberOfReceiveTweets: 1,
			numberOfDisplayedTweets: 1
		};
	},
	// 这种查找DOM节点树的方式感觉不是很好，可以通过设置ref属性来获取DOM节点树
	componentDidMount: function() {
		var componentDOMRepresentation = ReactDOM.findDOMNode(this);
		window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
		window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
	},
	// 在componentWillReceiveProps中调用setState()多少次都不会触发组件额外的渲染
	componentWillReceiveProps: function(nextProps) {
		var currentTweetLength = this.props.tweet.text.length;
		var nextTweetLength = nextProps.tweet.text.length;
		var isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
		this.setState({
			numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
		});
		var headerText;
		if(isNumberOfCharactersIncreasing) {
			headerText = 'Number of characters is increasing.';
		} else {
			headerText = 'Latest public photo from Twitter';
		}
		this.setState({
			headerText: headerText
		});
		window.snapterest.numberOfReceiveTweets++;
	},
	shouldComponentUpdate: function(nextProps, nextState) {
		return (nextProps.tweet.text.length > 1);
	},
	componentWillUpdate: function(nextProps, nextState) {
		
	},
	componentDidUpdate: function(prevProps, prevState) {
		window.snapterest.numberOfDisplayedTweets++;
	},
	componentWillUnmount: function() {
		delete window.snapterest;
	},
	addTweetToCollection: function(tweet) {
		CollectionActionCreator.addTweetToCollection(tweet);
	},
	render: function() {
		return (
			<section>
				<header text={this.state.headerText} />
				<Tweet tweet={this.props.tweet} onImageClick={this.addTweetToCollection} />
			</section>
		);
	}
});

module.exports = StreamTweet;