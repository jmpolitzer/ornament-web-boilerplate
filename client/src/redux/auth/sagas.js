import { call, put, takeLatest } from 'redux-saga/effects';
import * as Constants from './constants';
import Api from '../../api';

export function* login(action) {
  try {
    const response = yield call(Api.create, `auth/sign_in`, action.form);
    console.log(response);
    yield put({ type: Constants.LOGIN_SUCCESS, response });
  } catch(error) {
    console.log(error);
    yield put({ type: Constants.LOGIN_FAILURE, error });
  }
}

export function* watchLogin() {
  yield takeLatest(Constants.LOGIN, login);
}
