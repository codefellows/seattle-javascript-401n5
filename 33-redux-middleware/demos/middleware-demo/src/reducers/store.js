import { createStore, combineReducers, applyMiddleware } from 'redux';
import sweetState from './sweet';
import savoryState from './savory';
import reporter from './redux-reporter.js'

const rootReducer = combineReducers({
  sweetState,
  savoryState,
});

export default createStore(rootReducer, applyMiddleware(reporter));