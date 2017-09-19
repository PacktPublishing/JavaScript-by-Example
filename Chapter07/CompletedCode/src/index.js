import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**
 * imports for Redux
 */
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

/**
 * imports for redux persist
 */
import { persistStore } from 'redux-persist';
import localForage from 'localforage';

/**
 * Create Redux Store
 */
const store = configureStore();

/**
 * Persist the store
 */
persistStore(store, {storage: localForage});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
registerServiceWorker();
