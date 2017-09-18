import * as Actions from './actions';

export const increment = () => {
  return dispatch => {
    dispatch({
      type: Actions.INCREMENT_REQUESTED
    })

    dispatch({
      type: Actions.INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: Actions.INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: Actions.INCREMENT
      })
    }, 3000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: Actions.DECREMENT_REQUESTED
    })

    dispatch({
      type: Actions.DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: Actions.DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: Actions.DECREMENT
      })
    }, 3000)
  }
}
