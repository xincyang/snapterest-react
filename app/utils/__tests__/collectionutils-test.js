jest.autoMockOff();	// 关闭自动模拟数据
describe('collection utilities module', function() {
	var CollectionUtils = require('../collectionutils');
	var collectionTweetsMock = {
		collectionTweet7: {},
		collectionTweet8: {},
		collectionTweet9: {}
	};
	it('return a number of tweets in collection', function() {
		var actualNumberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweetsMock);
		var expectedNumberOfTweetsInCollection = 3;
		expect(actualNumberOfTweetsInCollection).toBe(expectedNumberOfTweetsInCollection);
	});
	it('checks if collection is not empty', function() {
		var isCollectionEmpty = CollectionUtils.isEmptyCollection(collectionTweetsMock);
		expect(isCollectionEmpty).toBeDefined();
		expect(isCollectionEmpty).toBe(false);
		expect(isCollectionEmpty).not.toBe(true);
	});
});