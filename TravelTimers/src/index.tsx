import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { ChillComponent } from './components';
import styles from './style/style.css';

class App extends Component<{}, {}>  {
  render() {
    return (
      <Router>
        <Route path="/" component={ChillComponent} />
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);