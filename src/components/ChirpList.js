var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var utils = require('../utils');
var PropTypes = React.PropTypes;
var moment = require('moment');

function ChirpBox(props) {
  return (
    <li className="row chirp">
      <div className="col-md-2" style={{padding: 0}}>
        <Link to='/user' params={{id: props.c.cid}}>
          <img src={utils.avatar(props.c.email)} alt=""/>
        </Link>
      </div>
      <div className="col-md-10">
        <p>
          <strong>{props.c.fullname} </strong>
          <span> @{props.c.username} {moment(props.c.$created).fromNow()}</span>
        </p>
        <p>{props.c.text}</p>
      </div>
    </li>
  );
}

function ChirpList(props) {
  var items = props.chirps.map(function (c) {
    return (
      <ChirpBox c={c} key={c.cid}/>
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

ChirpList.propTypes = {
  chirps: PropTypes.array.isRequired
};

module.exports = ChirpList;