import initialState from '../store/initialState';
import actions from '../actionTypes/actionTypes';

const ajaxCallsReducer = (state = initialState.ajaxCalls, action) => {
  switch(action.type) {

    case actions.GET_POSTS_AJAX_CALL_START:
      return {
        ...state,
        getAllPosts: {
          loading: true,
          hasError: false,
        },
      };

    case actions.GET_POSTS_AJAX_CALL_SUCCESS:
      return {
        ...state,
        getAllPosts: {
          loading: false,
          hasError: false,
        },
      };


    case actions.GET_POSTS_AJAX_CALL_FAILURE:
      return {
        ...state,
        getAllPosts: {
          loading: false,
          hasError: true,
        },
      };


    case actions.GET_AUTHORS_AJAX_CALL_START:
      return {
        ...state,
        getAuthors: {
          loading: true,
          hasError: false,
        },
      };

    case actions.GET_AUTHORS_AJAX_CALL_SUCCESS:
      return {
        ...state,
        getAuthors: {
          loading: false,
          hasError: false,
        },
      };

    case actions.GET_AUTHORS_AJAX_CALL_FAILURE:
      return {
        ...state,
        getAuthors: {
          loading: false,
          hasError: true,
        },
      };

    case actions.ADD_POST_AJAX_CALL_START:
      return {
        ...state,
        addPost: {
          loading: true,
          hasError: false,
        },
      };

    case actions.ADD_POST_AJAX_CALL_SUCCESS:
      return {
        ...state,
        addPost: {
          loading: false,
          hasError: false,
        },
      };

    case actions.ADD_POST_AJAX_CALL_FAILURE:
      return {
        ...state,
        addPost: {
          loading: false,
          hasError: true,
        },
      };

    default:
      return state;
  }
};

export default ajaxCallsReducer;
