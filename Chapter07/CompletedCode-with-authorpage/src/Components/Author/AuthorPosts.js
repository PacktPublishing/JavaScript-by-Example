import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ErrorMessage from '../Common/ErrorMessage';
import PostSummary from '../Common/PostSummary';
import LoadingIndicator from '../Common/LoadingIndicator';

class AuthorPosts extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
  }

  render() {
    return(
      <div className={`container`}>
        <h2>Posts by {decodeURI(this.props.match.params.authorname)}</h2>
        {
          this.props.loading
          ?
            <LoadingIndicator />
          :
            null
        }
        {
          this.props.hasError
          ?
            <ErrorMessage title={'Error!'} message={`Unable to retrieve posts!`} />
          :
            null
        }
        {
          this.props.posts.map(post => <PostSummary key={post.id} post={post}>Post</PostSummary>)
        }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

  const authorName = decodeURI(ownProps.match.params.authorname);

  return {
    posts: state.posts.filter(post => post.author === authorName),
    loading: state.ajaxCalls.getAuthors.loading && state.ajaxCalls.getAllPosts.loading,
    hasError: state.ajaxCalls.getAuthors.hasError && state.ajaxCalls.getAllPosts.hasError,
  };
}

export default withRouter(
  connect(mapStateToProps)(AuthorPosts)
);
