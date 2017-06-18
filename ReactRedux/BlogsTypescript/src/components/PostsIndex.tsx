import React, { Component } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

interface IProps extends RouteComponentProps<any> {
  test: string;
}

// interesting needed to set props to any at first
// to be able to pass this component to the router.
class PostsIndex extends Component<IProps, {}> {
  render() {
    return (
      <div>
        <h1>wat</h1>
      </div>
    );
  }
}

export default PostsIndex;
