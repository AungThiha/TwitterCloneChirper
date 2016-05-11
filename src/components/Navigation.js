var React = require('react');
var Link = require('react-router').Link;
var userStore = require('../stores/users');

function Navigation(props) {
  return (
    <ul>
      <li><Link to="/">Timeline</Link></li>
      <li><Link to="/users">Users</Link></li>
      <li><a href="/logout">Logout </a>({userStore.currentUser.username})</li>
    </ul>
  );
}

module.exports = Navigation;