import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  // lifecycle method... watch that spelling.
  componentDidMount() {
    // we get this from react router params is for wildcards in the url.
    const { id } = this.props.match.params;
    this
      .props
      .fetchPost();
  }

  render() {
    return (
      <div>
        Posts Show!
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(null, { fetchPost })(PostsShow);