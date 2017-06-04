import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { Math, User } from './reducers';

export default createStore(
  combineReducers({ Math, User }),
  {},
  applyMiddleware(logger)
);
