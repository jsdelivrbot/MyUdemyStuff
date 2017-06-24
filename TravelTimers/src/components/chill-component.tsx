import React, { SFC } from 'react';

import style from '../style/style.css';

const ChillComponent: SFC<{}> = props => (
  <h3 className={style.awesomeStyle}>This component contains chillness.</h3>
);

export default ChillComponent;