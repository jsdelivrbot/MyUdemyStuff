import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface ITravelTimesProps extends RouteComponentProps<any> {
  test: string;
}

class TravelTimes extends Component<ITravelTimesProps, {}> {
  render() {
    return (
      <div>
        travel times will go here.
      </div>
    );
  }
}

export default TravelTimes;