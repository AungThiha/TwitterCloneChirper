var React = require('react');
var chirpStore = require('../stores/chirps');
var ChirpList = require('../components/ChirpList');

var ChirpListContainer = React.createClass({
  getInitialState: function () {
    return {
      chirps: chirpStore.all()
    };
  },
  componentDidMount: function () {
    chirpStore.addChangeListener(this.onChirpsChange);
  },
  componentWillUnmount: function () {
    chirpStore.removeChangeListener(this.onChirpsChange);
  },
  onChirpsChange: function () {
    this.setState(this.getInitialState);
  },
  render: function () {
    return (
      <ChirpList chirps={this.state.chirps}/>
    );
  }
});

module.exports = ChirpListContainer;