import { createStore, combineReducers, applyMiddleware } from 'redux';
import sweetState from './sweet';
import savoryState from './savory';
import reporter from './redux-reporter';
import timeoutScheduler from './timeoutScheduler';

const rootReducer = combineReducers({
  sweetState,
  savoryState,
});

export default createStore(rootReducer, applyMiddleware(timeoutScheduler, reporter));