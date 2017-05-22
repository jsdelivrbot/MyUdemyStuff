import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Tempurature</th>
            <th>Pressure</th>
            <th>Humididty</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    );
  }
}

// can do { weather } instead of (state.weather)
// will just pull off weather from state for us.
function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);