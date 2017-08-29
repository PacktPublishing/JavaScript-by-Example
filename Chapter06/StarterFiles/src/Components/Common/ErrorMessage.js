import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import ErrorMessage from '../Common/ErrorMessage';
import apiCall from '../../services/api/apiCall';
import PostSummary from '../Common/PostSummary';
import LoadingIndicator from '../Common/LoadingIndicator';

class AuthorPosts extends Component {

  render() {
    return(
      <div className={`container`}>
        <h1>{`Author's Posts`}</h1>
      </div>
    );
  }
}

export default withRouter(AuthorPosts);
