import * as Constants from './constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.LOGIN_SUCCESS:
      return {
        ...state
      }

    case Constants.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error.response.data.message
      }

    default:
      return state;
  }
}
