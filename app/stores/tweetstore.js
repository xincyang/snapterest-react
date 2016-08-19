// 存储器(action handler)
var AppDispatcher = require('../dispatcher/appdispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var tweet = null;

// setTweet和emitChange都是作为模块的私有属性，那么修改tweet都是通过分发器进行分发，存储器内部进行修改
function setTweet(receiveTweet) {
	tweet = receiveTweet;
}

function emitChange() {
	TweetStore.emit('change');
}

var TweetStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(cb) {
		this.on('change', cb);
	},
	removeChangeListener: function(cb) {
		this.removeListener('change', cb);
	},
	getTweet: function() {
		return tweet;
	}
});

function handleAction(action) {
	if(action.type === 'receive_tweet') {
		setTweet(action.tweet);
		emitChange();
	}
}

// register()会返回一个用于标记TweetStore的记号(token)
TweetStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = TweetStore;

