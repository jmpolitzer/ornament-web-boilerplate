import { call, put, takeEvery } from 'redux-saga/effects';
import * as Constants from './constants';

/* This demonstrates how to make requests to an external server in development.
Our client app acts as a proxy for sending requests to the server. See this for
more details: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development */

export function* fetchTodos() {
  try {
    const todos = yield call(() => {
      return fetch(`api/todos`, {
        accept: 'application/json'
      })
      .then(response => {
        return response.json();
      });
    });
    yield put({ type: Constants.FETCH_TODOS_SUCCESS, todos: todos });
  } catch(e) {
    yield put({ type: Constants.FETCH_TODOS_FAILURE, message: e.message });
  }
}

export function* createTodo(action) {
  console.log('inside create todo saga', action);

  yield put({ type: Constants.CREATE_TODO_SUCCESS, form: action });
}

export function* updateTodo() {

}

export function* deleteTodo() {

}

export function* createTodoItem() {

}

export function* updateTodoItem() {

}

export function* completeTodoItem() {

}

export function* deleteTodoItem() {

}

/* These sagas continuously watch for dispatched actions. When one is recognized, the appropriate sagas above
fire off actions to our reducers. */

export function* watchFetchTodos() {
  yield takeEvery(Constants.FETCH_TODOS, fetchTodos);
}

export function* watchCreateTodo() {
  yield takeEvery(Constants.CREATE_TODO, createTodo);
}

export function* watchUpdateTodo() {
  yield takeEvery(Constants.UPDATE_TODO, updateTodo);
}

export function* watchDeleteTodo() {
  yield takeEvery(Constants.DELETE_TODO, deleteTodo);
}

export function* watchCreateTodoItem() {
  yield takeEvery(Constants.CREATE_TODO_ITEM, createTodoItem);
}

export function* watchUpdateTodoItem() {
  yield takeEvery(Constants.UPDATE_TODO_ITEM, updateTodoItem);
}

export function* watchCompleteTodoItem() {
  yield takeEvery(Constants.COMPLETE_TODO_ITEM, completeTodoItem);
}

export function* watchDeleteTodoItem() {
  yield takeEvery(Constants.DELETE_TODO_ITEM, deleteTodoItem);
}
