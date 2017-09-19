import React from 'react';
import PropTypes from 'prop-types';

const PostInputField = ({className, title, id, value, onChange}) => (
  <div className={`form-group ${className}`}>
    <label htmlFor={id}>{title}</label>
    <input type="text" className="form-control" id={id} value={value} onChange={onChange}/>
  </div>
);

PostInputField.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PostInputField;
