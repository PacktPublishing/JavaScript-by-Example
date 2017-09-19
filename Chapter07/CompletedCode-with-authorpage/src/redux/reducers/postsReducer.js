import initialState from '../store/initialState';
import actions from '../actionTypes/actionTypes';
import * as constants from 'redux-persist/constants';

const postsReducer = (state = initialState.posts, action) => {
  switch(action.type) {
    case actions.GET_POSTS:
      return action.payload.posts;

    case constants.REHYDRATE:
      if(action.payload.posts) {
        return action.payload.posts;
      }
      return state;

    default:
      return state;
  }

};

export default postsReducer;
