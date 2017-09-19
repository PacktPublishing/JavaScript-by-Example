import actions from '../actionTypes/actionTypes';
import apiCall from '../../services/api/apiCall';

export const getAllAuthors = () => {

  return dispatch => {

    dispatch(authorsApiCallStart());

    apiCall('authors', {}, 'GET')
      .then(authors => {
        dispatch(authorsApiCallSuccess());
        dispatch(getauthors(authors));
      })
      .catch(error => {
        dispatch(authorsApiCallFailure());
        console.error(error);
      });

  };

};

export const authorsApiCallStart = () => {
  return {
    type: actions.GET_AUTHORS_AJAX_CALL_START,
  };
};

export const authorsApiCallSuccess = () => {
  return {
    type: actions.GET_AUTHORS_AJAX_CALL_SUCCESS,
  };
};

export const authorsApiCallFailure = () => {
  return {
    type: actions.GET_AUTHORS_AJAX_CALL_FAILURE,
  };
};

export const getauthors = (authors) => {
  return {
    type: actions.GET_AUTHORS,
    payload: { authors },
  };
};
