import * as ActionTypes from './actionTypes';

/* These action creators are piped into the home/index.js file. When a user clicks a button
to fire them off, our sagas will be listening. */ 
export const incrementAsync = () => {
  return {
    type: ActionTypes.INCREMENT_ASYNC
  }
}

export const decrementAsync = () => {
  return {
    type: ActionTypes.DECREMENT_ASYNC
  }
}
