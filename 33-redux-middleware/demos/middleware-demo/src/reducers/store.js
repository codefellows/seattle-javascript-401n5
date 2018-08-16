import { createStore, combineReducers, applyMiddleware } from 'redux';
import sweetState from './sweet';
import savoryState from './savory';
import reporter from './redux-reporter.js'

export default () => createStore(reducer, applyMiddleware(reporter))
const rootReducer = combineReducers({
  sweetState,
  savoryState,
});

export default createStore(rootReducer, applyMiddleware(reporter));