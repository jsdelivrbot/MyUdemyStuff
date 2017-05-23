import React, { Component } from 'react';

class GoogleMap extends Component {
  // component lifecycle method.
  // gets called as part of Reacts process
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // ref gives direct reference by this.refs.map
    return <div ref="map"></div>
  }
}

export default GoogleMap;