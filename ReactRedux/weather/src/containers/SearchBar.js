import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // this binding stuff is kinda... eh.
    // could avoid using this by using phat arrow functions
    // so in onchange do () => this.onINputChange()
    this.onInputChange = this.onInputChange.bind(this);
    // this one behaved strangely though
    // man this feels bad doing all this.. this binding.
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    // dont reload page.
    event.preventDefault();

    // we need to go and fetch weather data.
    this.props.fetchWeather(this.state.term);
    // clear form
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your fav cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondar">Submit</button>
        </span>
      </form>
    );
  }
}

// connecting the dispatchingz
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

// null as first arg?
// only passig null because we dont care about connecting to 
// state in this particular place.
export default connect(null, mapDispatchToProps)(SearchBar);