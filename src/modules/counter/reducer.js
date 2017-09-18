import * as Actions from './actions';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case Actions.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case Actions.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case Actions.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state;
  }
}
