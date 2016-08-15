var React = require('react');
var StreamTweet = require('./streamtweet.react');
var Header = require('./header.react');
var SnapkiteStreamClient = require('snapkite-stream-client');

var Stream = React.createClass({
	getInitialState: function() {
		return {
			tweet: null
		};
	},
	// componentDidMount适合用来整合React和其他JavaScript库
	componentDidMount: function() {
		SnapkiteStreamClient.initializeStream(this.handleNewTweet);
	},
	componentWillUnmount: function() {
		SnapkiteStreamClient.destroyStream();
	},
	handleNewTweet: function(tweet) {
		this.setState({
			tweet: tweet
		});
	},	
	render: function() {
		var tweet = this.state.tweet;
		if(tweet) {
			return (
				<StreamTweet tweet={tweet} onAddTweetToCollection={this.props.addTweetToCollection} />
			); 
		}
		return (
			<Header text="Waiting for public photos from Twitter..." />
		);
	}
});

module.exports = Stream;