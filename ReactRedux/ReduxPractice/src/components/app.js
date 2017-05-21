import React, {Component} from 'react';

import BookList from '../Containers/BookList';
import BookDetail from '../Containers/BookDetail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList/>
        <BookDetail/>
      </div>
    );
  }
}
