import uuid from 'uuid/v1';
import defaultState from './defaultState';

// Actions
export const ADD = 'Sweet/ADD';

// Reducer
export default function reducer(state = defaultState, action) {

  const { type, payload } = action;

  switch (type) {
    case ADD:
      payload.id = uuid(); // this ok or need fresh copy?

      if(payload.name === 'twizzlers' || payload.name === 'red vines') {
        payload.name = 'hot tamales';
      }
      return {
        ...state,
        sweets: [...state.sweets, payload]
      };

    default: return state;
  }
}

// Action Creators
export function addSweet(sweet) {
  return {
    type: ADD,
    payload: sweet
  }
}