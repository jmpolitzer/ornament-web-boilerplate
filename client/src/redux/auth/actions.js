import * as Constants from './constants';

export const login = (form) => {
  return {
    type: Constants.LOGIN,
    form
  }
}

export const register = (form) => {
  return {
    type: Constants.REGISTER,
    form
  }
}
