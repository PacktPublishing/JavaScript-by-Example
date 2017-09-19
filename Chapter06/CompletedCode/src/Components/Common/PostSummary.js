import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';

const PostSummary = ({post}) => (
  <div className={`post-container container`}>
    <h3>{post.title}</h3>
    <p>{post.author}</p>
    <p>{post.content}</p>
    <NavLink className={`btn btn-primary read-more-button`} to={routes.post.replace(':id', post.id)}>Read More</NavLink>
  </div>
);

PostSummary.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostSummary;
