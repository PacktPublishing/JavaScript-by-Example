import React, { Component } from 'react';
import PostSummary from '../Common/PostSummary';
import ErrorMessage from '../Common/ErrorMessage';

import apiCall from '../../services/api/apiCall';
import LoadingIndicator from '../Common/LoadingIndicator';

class Home extends Component {

  render () {
    return (
      <div className={`posts-container container`}>
        <h1>{`Home`}</h1>
      </div>
    );
  }
}

export default Home;
