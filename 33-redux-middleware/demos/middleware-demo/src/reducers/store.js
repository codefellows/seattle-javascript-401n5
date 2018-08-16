import { createStore, combineReducers } from 'redux';
import sweetState from './sweet';
import savoryState from './savory';

const rootReducer = combineReducers({
  sweetState,
  savoryState,
});

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());