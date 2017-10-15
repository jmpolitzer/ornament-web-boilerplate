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

    case Constants.REGISTER_SUCCESS:
      return {
        ...state
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
