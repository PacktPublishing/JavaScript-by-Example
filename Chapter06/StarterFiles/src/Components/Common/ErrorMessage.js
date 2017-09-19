import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({title, message}) => (
  <div className="alert alert-danger">
    <strong>{title}</strong> {message}
  </div>
);

ErrorMessage.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
