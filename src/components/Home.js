var React = require('react');
var ChirpInputContainer = require('../containers/ChirpInputContainer');
var ChirpListContainer = require('../containers/ChirpListContainer');

var Home = function (props) {
  return (
    <div>
      <ChirpInputContainer />
      <ChirpListContainer />
    </div>
  );
};

module.exports = Home;