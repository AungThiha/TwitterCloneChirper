var React = require('react');
var PropTypes = React.PropTypes;
var actions = require('../actions');
var ChirpInput = require('../components/ChirpInput');

var ChirpInputContainer = React.createClass({
  getInitialState: function () {
    return {
      text: ''
    };
  },
  handleTextChange: function (evt) {
    this.setState({
      text: evt.target.value
    });
  },
  handleTextSave: function (evt) {
    evt.preventDefault();
    actions.chirp(this.state.text);
    this.setState(this.getInitialState());
  },
  render: function () {
    return (
      <ChirpInput
        text={this.state.text}
        onTextChange={this.handleTextChange}
        onTextSave={this.handleTextSave}/>
    );
  }
});

ChirpInputContainer.propTypes = {

};

module.exports = ChirpInputContainer;