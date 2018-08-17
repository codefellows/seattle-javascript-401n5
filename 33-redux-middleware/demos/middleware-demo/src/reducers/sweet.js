import uuid from 'uuid/v1';

const defaultState = { sweets : [] };

// Actions
export const ADD = 'Sweet/ADD';

// Reducer
export default function reducer(state = defaultState, action) {

  const { type, payload } = action;

  switch (type) {
    case ADD:
      return {
        ...state,
        sweets: [...state.sweets, payload]
      };

    default: return state;
  }
}

// Action Creators
export function addSweet(sweet) {

  sweet.id = uuid(); // this ok or need fresh copy?
  
  return {
    type: ADD,
    payload: sweet
  }
}