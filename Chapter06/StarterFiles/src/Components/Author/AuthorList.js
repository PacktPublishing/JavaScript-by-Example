import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ErrorMessage from '../Common/ErrorMessage';

import apiCall from '../../services/api/apiCall';
import routes from '../../routes';
import LoadingIndicator from '../Common/LoadingIndicator';

class AuthorList extends Component {

  render() {
    return(
      <div className={`container`}>
        <h1>{`Authors List`}</h1>
      </div>
    );
  }
}

export default AuthorList;
