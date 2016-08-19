// 数据流的入口
var SnapkiteStreamClient = require('snapkite-stream-client');
var TweetActionCreators = require('../actions/tweetactioncreators');

function initailizeStreamOfTweets() {
	SnapkiteStreamClient.initializeStream(TweetActionCreators.handleAction);
}

exports.initailizeStreamOfTweets = initailizeStreamOfTweets;