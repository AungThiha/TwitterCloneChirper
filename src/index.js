
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

var chirpStore = require('./stores/chirps');
var API = require('./api');
API.fetchChirps();

ReactDOM.render(routes, document.getElementById('app'));
