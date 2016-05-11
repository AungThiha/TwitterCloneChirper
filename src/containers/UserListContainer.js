var React = require('react');
var userStore = require('../stores/users');
var UserList = require('../components/UserList');

var UserListContainer = React.createClass({
  getInitialState: function () {
    return {
      users: userStore.all().filter(function (user) {
        return user.cid !== userStore.currentUser.cid;
      })
    };
  },
  mixins: [userStore.mixin],
  onChange: function () {
    this.setState(this.getInitialState);
  },
  render: function () {
    return (
      <UserList users={this.state.users}/>
    );
  }
});

module.exports = UserListContainer;