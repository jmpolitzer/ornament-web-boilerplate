import * as ActionTypes from './actionTypes';

export const increment = () => {
  return dispatch => {
    dispatch({
      type: ActionTypes.INCREMENT_REQUESTED
    })

    dispatch({
      type: ActionTypes.INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: ActionTypes.INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: ActionTypes.INCREMENT
      })
    }, 3000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: ActionTypes.DECREMENT_REQUESTED
    })

    dispatch({
      type: ActionTypes.DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: ActionTypes.DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: ActionTypes.DECREMENT
      })
    }, 3000)
  }
}
