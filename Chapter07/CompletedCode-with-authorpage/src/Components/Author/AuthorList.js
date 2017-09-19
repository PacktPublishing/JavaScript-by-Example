import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../../routes';
import LoadingIndicator from '../Common/LoadingIndicator';
import ErrorMessage from '../Common/ErrorMessage';

class AuthorList extends Component {

  static propTypes = {
    authors: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
  }

  render() {
    return(
      <div className={`container`}>
        <h2>Authors</h2>
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
            <ErrorMessage title={'Error!'} message={'Unable to retrieve Author List!'} />
          :
            null
        }
        <ul className={`list-group`}>
          {
            this.props.authors.map((author, index) =>
              <li className={`list-group-item`} key={index}>
                <NavLink to={routes.author.replace(':authorname', author)}>{author}</NavLink>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authors: state.authors,
    loading: state.ajaxCalls.getAuthors.loading,
    hasError: state.ajaxCalls.getAuthors.hasError,
  };
}

export default connect(mapStateToProps)(AuthorList);
