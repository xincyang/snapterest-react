function getNumberOfTweetsInCollection(collection) {
	var TweetUtil = require('./tweetutils');
	return TweetUtil.getListOfTweetIds(collection).length;
}

function isEmptyCollection(collection) {
	return getNumberOfTweetsInCollection(collection) === 0;
}

module.exports = {
	getNumberOfTweetsInCollection: getNumberOfTweetsInCollection,
	isEmptyCollection: isEmptyCollection
};