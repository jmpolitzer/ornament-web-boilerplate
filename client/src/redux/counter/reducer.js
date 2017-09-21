import * as ActionTypes from './actionTypes';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case ActionTypes.INCREMENT:
      return {
        ...state,
        count: action.count,
        isIncrementing: !state.isIncrementing
      }

    case ActionTypes.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case ActionTypes.DECREMENT:
      return {
        ...state,
        count: action.count,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state;
  }
}
