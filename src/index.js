
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

var API = require('./api');
API.fetchChirps();
API.fetchUsers();

ReactDOM.render(routes, document.getElementById('app'));
