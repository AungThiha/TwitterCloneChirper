var React = require('react');
var PropTypes = React.PropTypes;
var utils = require('../utils');
var Link = require('react-router').Link;

function Box(props) {
  var id = typeof props.item.userId === 'number' ? props.item.userId : props.item.cid;
  return (
    <li className="row chirp">
      <div className="col-md-2" style={{padding: 0}}>
        <Link to={'/user/' + id}>
          <img src={utils.avatar(props.item.email)} alt=""/>
        </Link>
      </div>
      <div className="col-md-10">
        <p>
          <strong>{props.item.fullname} </strong>
          <span> @{props.item.username} {props.timestamp && props.timestamp}</span>
        </p>
        <p>
          {props.children}
        </p>
      </div>
    </li>
  );
}

Box.propTypes = {
  item: PropTypes.object.isRequired,
  timestamp: PropTypes.string
};

module.exports = Box;