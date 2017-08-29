import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';

import rootReducer from '../reducers/rootReducer';

const configureStore = (preloadedState) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk),
    autoRehydrate()
  );
};

export default configureStore;
