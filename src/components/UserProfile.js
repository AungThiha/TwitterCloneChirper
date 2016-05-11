var React = require('react');
var PropTypes = React.PropTypes;
var utils = require('../utils');
var FollowButton = require('./FollowButton');
var Loading = require('./Loading');

function UserProfile(props) {
  if (!props.user) {
    return (<Loading/>);
  }
  var items = props.chirps.map(function (chirp) {
    return (
      <li key={chirp.cid}>{chirp.text}</li>
    );
  });
  return (
    <div>
      <div className="col-md-2">
        <img src={utils.avatar(props.user.email)} alt=""/>
      </div>
      <div className="col-md-10">
        <h1>{props.user.fullname}</h1>
        <h3 className="timestamp">{props.user.username}</h3>
        <p>
          <FollowButton userId={props.user.cid}/>
        </p>
      </div>
      <ul>
        {items}
      </ul>
    </div>
  );
}

UserProfile.propTypes = {
  user: PropTypes.object,
  chirps: PropTypes.array.isRequired
};

module.exports = UserProfile;