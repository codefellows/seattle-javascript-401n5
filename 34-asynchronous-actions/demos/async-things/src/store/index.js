import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import thingReducer from './thing';


export default createStore(thingReducer, applyMiddleware(thunk));