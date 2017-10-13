import * as Constants from './constants';

const initialState = {
  isAuthenticated: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      }

    case Constants.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error.response.data.message
      }

    case Constants.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false
      }

    default:
      return state;
  }
}
