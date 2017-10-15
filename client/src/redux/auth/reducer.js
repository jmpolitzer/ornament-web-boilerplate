import * as Constants from './constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.LOGIN_SUCCESS:
      return {
        ...state
      }

    case Constants.REGISTER_SUCCESS:
      return {
        ...state
      }

    default:
      return state;
  }
}
