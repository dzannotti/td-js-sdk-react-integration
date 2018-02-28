/*global td*/
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Info from './Info';

class App extends Component {
  constructor(props) {
    super(props);
    td.trackClicks();
    this.props.history.listen((location, action) => {
      td.trackPageview('pageviews');
    });
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/">Dashboard</Link>
          <span>*</span>
          <Link to="/info">Info</Link>
        </nav>
        <div>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/info" component={Info} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
