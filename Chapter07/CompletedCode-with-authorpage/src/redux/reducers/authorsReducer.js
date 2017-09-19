import initialState from '../store/initialState';
import actions from '../actionTypes/actionTypes';
import * as constants from 'redux-persist/constants';

const authorsReducer = (state = initialState.authors, action) => {
  switch(action.type) {
    case actions.GET_AUTHORS:
      return action.payload.authors;

    case constants.REHYDRATE:
      if(action.payload.authors) {
        return action.payload.authors;
      }
      return state;

    default:
      return state;
  }

};

export default authorsReducer;
