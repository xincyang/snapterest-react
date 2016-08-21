var AppDispatcher = require('../dispatcher/appdispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var collectionTweets = {};
var collectionName = 'new';
var CHANGE_EVENT = 'change';

function addTweetToCollection(tweet) {
	collectionTweets[tweet.id] = tweet;
}

function removeTweetFromCollection(tweetId) {
	delete collectionTweets[tweetId];
}

function removeAllTweetsFromCollection() {
	collectionTweets = {};
}

function setCollectionName(newCollectionName) {
	collectionName = newCollectionName;
}

function emitChange() {
	CollectionStore.emit(CHANGE_EVENT);
}

var CollectionStore = assgin({}, EventEmitter.prototype, {
	addChangeListener: function(cb) {
		this.on(CHANGE_EVENT, cb);
	},
	removeChangeListener: function(cb) {
		this.removeListener(CHANGE_EVENT, cb);
	},
	getCollectionName: function() {
		return collectionName;
	},
	getCollectionTweets: function() {
		return collectionTweets;
	}
});

function handleAction(action) {
	console.log('be excuted...');
	switch(action.type) {
		case 'add_tweet_to_collection': 
			addTweetToCollection(action.tweet);
			emitChange();
			break;
		case 'remove_tweet_from_collection':
			removeTweetFromCollection(action.tweetId);
			emitChange();
			break;
		case 'remove_all_tweet_from_collection':
			removeAllTweetsFromCollection();
			emitChange();
			break;
		case 'set_collection_name':
			setCollectionName(action.collectionName);
			emitChange();
			break;
		default:
			break;
	}
}

CollectionStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = CollectionStore;
