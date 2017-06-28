import React, { Component, SyntheticEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

const API_KEY = encodeURI('AIzaSyB_GwIPvk_1Xr2SS1s5n4mnVdbMpPTsfoM');

// tslint:disable-next-line:max-line-length
const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=${API_KEY}`;

interface ITravelTimesState {
  origin: string;
  destination: string;
}

class TravelTimes extends Component<RouteComponentProps<any>, ITravelTimesState> {
  // this is identical in function to setting up state in a constructor function
  state: ITravelTimesState = {
    origin: '',
    destination: ''
  };

  // define these as lambdas to get around having to use .bind(this) from onChange callsite
  handleOriginChange = ({ currentTarget: { value } }: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ origin: value });
  }

  handleDestinationChange = ({ currentTarget: { value } }: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ destination: value });
  }

  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    Observable.ajax({
      crossDomain: true,
      url: URL,
      responseType: 'json'
    }).subscribe(data => console.log(data));
  }

  render() {
    const { origin, destination } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={origin}
            placeholder="origin"
            onChange={this.handleOriginChange}
            autoFocus={true}
          />
          <input
            type="text"
            value={destination}
            placeholder="destination"
            onChange={this.handleDestinationChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default TravelTimes;