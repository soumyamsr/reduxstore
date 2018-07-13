import { createStore } from 'redux';

function locateStore(state = {
  zip: 301100
} , action) {
  switch (action.type) {
  case 'NAME':
    return Object.assign({}, action.payload);
  case 'ZIP':
    return Object.assign({}, action.payload);;
  default:
    return state;
  }
}

let store = createStore(locateStore);

export default store;