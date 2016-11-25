import {applyMiddleware, combineReducers, createStore} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';

const middleware = applyMiddleware(
  thunk, 
  logger({predicate: (getState, action) => __DEV__})
);

export default createStore(reducer, middleware);

