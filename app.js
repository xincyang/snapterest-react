var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./app/components/application.react');
var WebApiUtils = require('./app/utils/webapiutils');

WebApiUtils.initailizeStreamOfTweets();

ReactDOM.render(<App />, document.getElementById('app-container'));