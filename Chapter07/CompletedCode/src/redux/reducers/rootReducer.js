import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import authorsReducer from './authorsReducer';
import ajaxCallsReducer from './ajaxCallsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  authors: authorsReducer,
  ajaxCalls: ajaxCallsReducer,
});

export default rootReducer;
