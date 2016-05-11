var React = require('react');
var chirpStore = require('../stores/chirps');
var userStore = require('../stores/users');
var UserProfile = require('../components/UserProfile');

var UserProfileContainer = React.createClass({
  getInitialState: function () {
    var id = parseInt(this.props.params.id);
    return {
      user: userStore.get(id),
      chirps: chirpStore.all().filter(function (chirp) {
        return chirp.userId == id;
      })
    };
  },
  mixins: [userStore.mixin, chirpStore.mixin],
  onChange: function () {
    this.setState(this.getInitialState);
  },
  render: function () {
    return (
      <UserProfile user={this.state.user}
                   chirps={this.state.chirps}/>
    );
  }
});

module.exports = UserProfileContainer;