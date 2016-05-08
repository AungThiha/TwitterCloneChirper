var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Main = React.createClass({
  render: function () {
    return (
      <div className="container">
        <div class="page-header">
          <h1>Chirper</h1>
        </div>
        <div className="row">
          <div className="col-md-3 col-md-offset-1">
            Navigation
          </div>
          <div className="col-md-8">
            <ReactCSSTransitionGroup
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              transitionName="appear">
              {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
            </ReactCSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;