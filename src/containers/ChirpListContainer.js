var React = require('react');
var chirpStore = require('../stores/chirps');
var ChirpList = require('../components/ChirpList');
var userStore = require('../stores/users');

var ChirpListContainer = React.createClass({
  getInitialState: function () {
    return {
      chirps: chirpStore.all().filter(function (chirp) {
        return userStore.currentUser.following.indexOf(chirp.userId) > -1
          || userStore.currentUser.cid === chirp.userId;
      })
    };
  },
  mixins: [userStore.mixin, chirpStore.mixin],
  onChange: function () {
    this.setState(this.getInitialState);
  },
  render: function () {
    return (
      <ChirpList chirps={this.state.chirps}/>
    );
  }
});

module.exports = ChirpListContainer;