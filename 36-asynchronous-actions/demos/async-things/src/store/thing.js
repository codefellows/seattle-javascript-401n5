// Actions
const ADD = 'Thing/ADD';
const ADD_ALL = 'Thing/ADD_ALL';

const FETCH = 'Thing/FETCH';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        ...action.payload
      ];
    case ADD_ALL :

      return [...state, ...action.payload];

    default: return state;
  }
}

// Action Creators
export function addThing(thing) {
  return {
    type: ADD,
    payload: thing
  }
}

export function addThings(things) {

  return {
    type: ADD_ALL,
    payload: things 
  }
}

/*

  */
export function fetchThings() {

  return dispatch => {
    
    fetch('https://internets-of-thing-api.herokuapp.com/api/v1/things')
      .then(function(response) {
        return response.json(); 
      })
      .then(function(things) {

        dispatch(addThings(things));

      });

  };
}