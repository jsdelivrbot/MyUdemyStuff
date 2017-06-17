import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import { PostIndex } from './components';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={PostIndex} />
      </Switch>
    </div>
  </BrowserRouter>,
document.querySelector('#root'));
