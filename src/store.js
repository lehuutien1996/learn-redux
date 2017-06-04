import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import { Math, User } from './reducers';

export default createStore(
  combineReducers({ Math, User }),
  {},
  applyMiddleware(logger, thunk, promise())
);
