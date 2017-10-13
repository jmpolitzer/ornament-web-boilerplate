import { call, put, takeLatest } from 'redux-saga/effects';
import { Cookies } from 'react-cookie';
import * as Constants from './constants';
import Api from '../../api';

const cookies = new Cookies();

export function* login(action) {
  try {
    const response = yield call(Api.create, `auth/sign_in`, action.form);
    cookies.set('ornament-token', response.data.token, { path: '/' })
    yield put({ type: Constants.LOGIN_SUCCESS });
  } catch(error) {
    yield put({ type: Constants.LOGIN_FAILURE, error });
  }
}

export function* logout(action) {
  cookies.remove('ornament-token');
  yield put({ type: Constants.LOGOUT_SUCCESS })
}

export function* watchLogin() {
  yield takeLatest(Constants.LOGIN, login);
}

export function* watchLogout() {
  yield takeLatest(Constants.LOGOUT, logout);
}
