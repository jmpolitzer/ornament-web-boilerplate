import { call, put, takeLatest } from 'redux-saga/effects';
import { Cookies } from 'react-cookie';
import { stopSubmit } from 'redux-form';
import * as Constants from './constants';
import Api from '../../api';

const cookies = new Cookies();

export function* login(action) {
  try {
    const response = yield call(Api.create, `auth/sign_in`, action.form);
    cookies.set('ornament-token', response.data.token, { path: '/' });
    yield put({ type: Constants.LOGIN_SUCCESS });
  } catch(error) {
    yield put(stopSubmit('loginForm', { email: error.response.data.message }));
  }
}

export function* register(action) {
  try {
    const response = yield call(Api.create, `auth/register`, action.form);
    cookies.set('ornament-token', response.data.token, { path: '/' });
    yield put({ type: Constants.REGISTER_SUCCESS });
  } catch(error) {
    yield put(stopSubmit('registerForm', { email: error.response.data.message }));
  }
}

export function* watchLogin() {
  yield takeLatest(Constants.LOGIN, login);
}

export function* watchRegister() {
  yield takeLatest(Constants.REGISTER, register)
}
