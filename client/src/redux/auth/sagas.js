import { call, put, takeLatest } from 'redux-saga/effects';
import { Cookies } from 'react-cookie';
import * as Constants from './constants';
import Api from '../../api';

export function* login(action) {
  try {
    const response = yield call(Api.create, `auth/sign_in`, action.form);
    const cookies = new Cookies();
    cookies.set('ornament-token', response.data.token, { path: '/' })
    yield put({ type: Constants.LOGIN_SUCCESS });
  } catch(error) {
    yield put({ type: Constants.LOGIN_FAILURE, error });
  }
}

export function* watchLogin() {
  yield takeLatest(Constants.LOGIN, login);
}
