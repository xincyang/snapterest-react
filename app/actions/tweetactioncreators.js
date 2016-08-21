// 动作生成器（action creators）
var AppDispatcher = require('../dispatcher/appdispatcher');

function receiveTweet(tweet) {
	// 确保存储器可以接收到tweet对象
	var action = {
		type: 'receive_tweet',
		tweet: tweet
	};
	AppDispatcher.dispatch(action);
}

module.exports = {
	receiveTweet: receiveTweet
};