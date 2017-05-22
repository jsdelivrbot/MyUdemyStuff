// reducers are just a function
// so in redux we also dont manipulate state directly
import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // concat will return a new array with the new stuff added 
      // to old array. so we doing a good job here
      // and returning new state instead of modifying state.
      // return state.concat([action.payload.data]);

      // this also works tis a es6 bit.
      // compact way of creating new array.
      // again super important
      // return new state dont manip state.
      return [ action.payload.data, ...state];
  }
  return state;
}