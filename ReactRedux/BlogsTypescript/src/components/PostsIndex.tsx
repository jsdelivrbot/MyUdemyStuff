import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// interesting needed to set props to any at first
// to be able to pass this component to the router.
class PostsIndex extends Component<any, {}> {
  render() {
    return (
      <div>
        <h1>wat</h1>
      </div>
    );
  }
}

export default PostsIndex;
