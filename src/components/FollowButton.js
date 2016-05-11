var React = require('react');
var PropTypes = React.PropTypes;
var userStore = require('../stores/users');
var actions = require('../actions');

var FollowButton = React.createClass({
  propTypes: {
    userId: PropTypes.number.isRequired
  },
  getInitialState: function () {
    return {
      following: userStore.currentUser.following
    };
  },
  onChange: function () {
    this.setState(this.getInitialState);
  },
  mixins: [userStore.mixin],
  render: function () {

    if(userStore.currentUser.cid === this.props.userId) return (<span>This is you.</span>);

    var text, fn;

    if (this.state.following.indexOf(this.props.userId) > -1) {
      text = 'unfollow';
      fn = function () {
        actions.unfollow(this.props.userId);
      }.bind(this);
    } else {
      text = 'follow';
      fn = function () {
        actions.follow(this.props.userId);
      }.bind(this);
    }

    return (
      <button className="btn btn-primary" onClick={fn}>{text}</button>
    );

  }
});


module.exports = FollowButton;