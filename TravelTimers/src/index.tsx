import React from 'react';
import ReactDOM from 'react-dom';

import { FuckYouToo } from './fuck-you-too';

import * as styles from './style.css';

const App: React.SFC<{}> = props => (
  <div className={styles.awesomeStyle}>
    <FuckYouToo />
    also fuck this
  </div>
);

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);