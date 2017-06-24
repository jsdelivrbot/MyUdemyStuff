import React from 'react';
import ReactDOM from 'react-dom';

import { ChillComponent } from './components';
import styles from './style/style.css';

const App: React.SFC<{}> = props => (
  <div className={styles.awesomeStyle}>
    aight lets be chill
    <ChillComponent />
  </div>
);

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);