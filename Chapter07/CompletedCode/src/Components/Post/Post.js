import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ErrorMessage from '../Common/ErrorMessage';
import apiCall from '../../services/api/apiCall';
import LoadingIndicator from '../Common/LoadingIndicator';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Post extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    post: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
  }

  render() {
    return(
      <div className={`post-container container`}>
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
            <ErrorMessage title={'Error!'} message={`Unable to retrieve post!`} />
          :
            null
        }
        {
          this.props.post
          ?
            <div>
              <h2>{this.props.post.title}</h2>
              <p>{this.props.post.author}</p>
              <p>{this.props.post.content}</p>
            </div>
          :
            null
        }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

  return {
    post: state.posts.find(post => post.id === ownProps.match.params.id),
    loading: state.ajaxCalls.getAllPosts.loading,
    hasError: state.ajaxCalls.getAllPosts.hasError,
  };
}

export default withRouter(
  connect(mapStateToProps)(Post)
);
