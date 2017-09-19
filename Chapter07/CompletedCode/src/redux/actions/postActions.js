import actions from '../actionTypes/actionTypes';
import apiCall from '../../services/api/apiCall';


export const getAllPosts = () => {

  return dispatch => {

    dispatch(postsApiCallStart());

    apiCall('posts', {}, 'GET')
      .then(posts => {
        dispatch(postsApiCallSuccess());
        dispatch(getPosts(posts));
      })
      .catch(error => {
        dispatch(postsApiCallFailure());
        console.error(error);
      });

  };

};

export const postsApiCallStart = () => {
  return {
    type: actions.GET_POSTS_AJAX_CALL_START,
  };
};

export const postsApiCallSuccess = () => {
  return {
    type: actions.GET_POSTS_AJAX_CALL_SUCCESS,
  };
};

export const postsApiCallFailure = () => {
  return {
    type: actions.GET_POSTS_AJAX_CALL_FAILURE,
  };
};

export const getPosts = (posts) => {
  return {
    type: actions.GET_POSTS,
    payload: { posts },
  };
};

export const addNewPost = (body) => {
  return dispatch => {

    dispatch(addPostApiCallStart());

    apiCall(`post`, body)
    .then(() => {

      dispatch(addPostApiCallSuccess());
      dispatch(getAllPosts());

    })
    .catch(error => {

      dispatch(addPostApiCallFailure());

    });
  };
};

export const addPostApiCallStart = () => {
  return {
    type: actions.ADD_POST_AJAX_CALL_START
  };
};

export const addPostApiCallSuccess = () => {
  return {
    type: actions.ADD_POST_AJAX_CALL_SUCCESS
  };
};

export const addPostApiCallFailure = () => {
  return {
    type: actions.ADD_POST_AJAX_CALL_FAILURE
  };
};
