var React = require('react');
var ReactDOM = require('react-dom');
var Stream = require('./stream.react');
var Collection = require('./collection.react');

var App = React.createClass({
	getInitialState: function() {
		return {
			/** 
			 * Tweet: {}
			 */
			collectionTweets: []
		};
	},
	addTweetToCollection: function(tweet) {
		var collectionTweets = this.state.collectionTweets;
		collectionTweets[tweet.id] = tweet;
		this.setState({
			collectionTweets: collectionTweets
		});
	},
	removeTweetFromCollection: function(tweet) {
		var collectionTweets = this.state.collectionTweets;
		collectionTweets.delete(tweet.id);
		this.setState({
			collectionTweets: collectionTweets
		});
	},
	removeAllTweetsFromCollection: function() {
		this.setState({
			collectionTweets: {}
		});
	},
	render: function() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4">
						<Stream onAddTweetToCollection={this.addTweetToCollection} />
					</div>
					<div className="col-md-8">
						<Collection tweets={this.state.collectionTweets} onRemoveTweetFromCollection={this.removeTweetFromCollection} onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection}/>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = App;