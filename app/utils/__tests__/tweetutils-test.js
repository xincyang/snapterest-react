jest.dontMock('../tweetutils');	// 如果没有这句，jest会返回tweetutils模块的模拟数据，而不是真正的模块
describe('Tweet utilities module', function() {
	it('return an array of tweet ids', function() {
		var TweetUtil = require('../tweetutils');
		// 模拟对象
		var tweetMocks = {
			tweet1: {},
			tweet2: {},
			tweet3: {}
		};
		var expectedListOfTweetIds = ['tweet1', 'tweet2', 'tweet3'];
		var actualListOfTweetIds = TweetUtil.getListOfTweetIds(tweetMocks);
		expect(actualListOfTweetIds).toEqual(expectedListOfTweetIds);
	})
});