import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import * as ActionTypes from './actionTypes';

export function* incrementAsync() {
  yield put({ type: ActionTypes.INCREMENT_REQUESTED });
  yield delay(2000);
  yield put({ type: ActionTypes.INCREMENT });
}

export function* decrementAsync() {
  yield put({ type: ActionTypes.DECREMENT_REQUESTED });
  yield delay(2000);
  yield put({ type: ActionTypes.DECREMENT });
}

/* These sagas continuously watch for dispatched actions. When one is recognized, the appropriate sagas above
fire off actions to our reducers. */ 
export function* watchIncrementAsync() {
  yield takeEvery(ActionTypes.INCREMENT_ASYNC, incrementAsync);
}

export function* watchDecrementAsync() {
  yield takeEvery(ActionTypes.DECREMENT_ASYNC, decrementAsync);
}
