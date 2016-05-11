var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var Main = require('../components/Main');
var HomeContainer = require('../containers/HomeContainer');
var UserListContainer = require('../containers/UserListContainer');
var UserProfileContainer = require('../containers/UserProfileContainer');

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path="/users" component={UserListContainer} />
      <Route path="/user/:id" component={UserProfileContainer}/>
    </Route>
  </Router>
);

module.exports = routes;