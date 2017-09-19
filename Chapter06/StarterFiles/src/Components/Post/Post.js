import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ErrorMessage from '../Common/ErrorMessage';
import apiCall from '../../services/api/apiCall';
import LoadingIndicator from '../Common/LoadingIndicator';

class Post extends Component {

  render() {
    return(
      <div className={`post-container container`}>
        <h1>{`Post Details`}</h1>
      </div>
    );
  }
}

export default Post;
