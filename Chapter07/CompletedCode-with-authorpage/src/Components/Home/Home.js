import React from 'react';
import PropTypes from 'prop-types';

const SuccessMessage = ({title, message}) => (
  <div className="alert alert-success">
    <strong>{title}</strong> {message}
  </div>
);

SuccessMessage.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default SuccessMessage;
