import * as Constants from './constants';

const initialState = {
  showRegisterForm: false
};

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

    case Constants.REGISTER_SUCCESS:
      return {
        ...state
      }

    case Constants.REGISTER_FAILURE:
      return {
        ...state,
        error: action.error.response.data.message
      }

    case Constants.TOGGLE_REGISTER_FORM:
      return {
        ...state,
        showRegisterForm: !state.showRegisterForm
      }

    default:
      return state;
  }
}
