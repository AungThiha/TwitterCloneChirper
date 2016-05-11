var React = require('react');
var Box = require('./Box');
var FollowButton = require('./FollowButton');
var PropTypes = React.PropTypes;

function UserList(props) {
  var items = props.users.map(function (u) {
    return (
      <Box key={u.cid} item={u}>
        <FollowButton userId={u.cid}/>
      </Box>
    );
  });
  return (
    <div className="row">
      <ul className="chirp-list">
        {items}
      </ul>
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

module.exports = UserList;