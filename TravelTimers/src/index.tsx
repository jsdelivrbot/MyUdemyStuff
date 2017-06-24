import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ChillComponent, TravelTimes } from './components';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={ChillComponent} />
      <Route path="/traveltimes" component={TravelTimes} />
    </Switch>
  </Router>,
  document.querySelector('#root'));