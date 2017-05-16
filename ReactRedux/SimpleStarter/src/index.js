import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './Components/SearchBar';

const API_KEY = 'AIzaSyCEBjRru2_gciS62Rs_OXY3VB1jxAJ4LXQ';

// create new component should produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// take this component html and put it on the page / in the dom
ReactDOM.render(
  <App/>, document.querySelector('.container'));