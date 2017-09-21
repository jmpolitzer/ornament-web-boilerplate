import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as ActionTypes from './actionTypes';

export function* incrementAsync() {
  yield put({ type: ActionTypes.INCREMENT_REQUESTED });
  yield delay(2000);

  /* This demonstrates how to make requests to an external server in development.
  Our client app acts as a proxy for sending requests to the server. See this for
  more details: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development */ 
  const response = yield call(() => {
    return fetch(`awesome`, {
      accept: "application/json"
    })
    .catch(error => {
      console.log(error)
    }).then(data => {
      return data.json();
    });
  });

  console.log('API Response: ', response);

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
