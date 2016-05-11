var React = require('react');
var Box = require('./Box');
var PropTypes = React.PropTypes;
var moment = require('moment');

function ChirpList(props) {
  var items = props.chirps.map(function (c) {
    return (
      <Box item={c} timestamp={moment(c.$created).fromNow()} key={c.cid}>
        {c.text}
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

ChirpList.propTypes = {
  chirps: PropTypes.array.isRequired
};

module.exports = ChirpList;