import { call, put, takeLatest } from 'redux-saga/effects';
import { reset } from 'redux-form';
import * as Constants from './constants';
import Api from '../../api';

/* This demonstrates how to make requests to an external server in development.
Our client app acts as a proxy for sending requests to the server. See this for
more details: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development */

export function* fetchTodos() {
  try {
    const response = yield call(Api.get, `api/todos`);
    yield put({ type: Constants.FETCH_TODOS_SUCCESS, todos: response.data });
  } catch(error) {
    yield put({ type: Constants.FETCH_TODOS_FAILURE, error });
  }
}

export function* createTodo(action) {
  try {
    const response = yield call(Api.create, `api/todos`, action.form);
    yield put({ type: Constants.CREATE_TODO_SUCCESS, response });
    yield put(reset(`createTodoForm`));
    yield put({ type: Constants.FETCH_TODOS });
  } catch(error) {
    yield put({ type: Constants.CREATE_TODO_FAILURE, error });
  }
}

export function* updateTodo(action) {

  try {
    const response = yield call(Api.update, `api/todos/${action.id}`, action.form);
    yield put({ type: Constants.UPDATE_TODO_SUCCESS, response });
    yield put({ type: Constants.IS_EDITING_TODO, id: action.id });
    yield put({ type: Constants.FETCH_TODOS });
  } catch(error) {
    yield put({ type: Constants.UPDATE_TODO_FAILURE, error });
  }
}

export function* deleteTodo(action) {
  try {
    const response = yield call(Api.delete, `api/todos/${action.id}`);
    yield put({ type: Constants.DELETE_TODO_SUCCESS, response });
    yield put({ type: Constants.FETCH_TODOS });
  } catch(error) {
    yield put({ type: Constants.DELETE_TODO_FAILURE, error });
  }
}

export function* createTodoItem(action) {
  try {
    const response = yield call(Api.create, `api/todos/${action.id}/items`, action.form);
    yield put({ type: Constants.CREATE_TODO_ITEM_SUCCESS, response });
    yield put(reset(`createTodoItemForm-${action.id}`));
    yield put({ type: Constants.FETCH_TODOS });
  } catch(error) {
    yield put({ type: Constants.CREATE_TODO_ITEM_FAILURE, error });
  }
}

export function* updateTodoItem(action) {
  try {
    const response = yield call(Api.update, `api/todos/${action.form.todoId}/items/${action.id}`, action.form);
    yield put({ type: Constants.UPDATE_TODO_ITEM_SUCCESS, response });
    yield put({ type: Constants.FETCH_TODOS });
  } catch(error) {
    yield put({ type: Constants.UPDATE_TODO_ITEM_FAILURE, error });
  }
}

export function* completeTodoItem() {

}

export function* deleteTodoItem(action) {
  try {
    const response = yield call(Api.delete, `api/todos/${action.item.todoId}/items/${action.item.id}`);
    yield put({ type: Constants.DELETE_TODO_ITEM_SUCCESS, response });
    yield put({ type: Constants.FETCH_TODOS });
  } catch(error) {
    yield put({ type: Constants.DELETE_TODO_ITEM_FAILURE, error });
  }
}

/* These sagas continuously watch for dispatched actions. When one is recognized, the appropriate sagas above
fire off actions to our reducers. */

export function* watchFetchTodos() {
  yield takeLatest(Constants.FETCH_TODOS, fetchTodos);
}

export function* watchCreateTodo() {
  yield takeLatest(Constants.CREATE_TODO, createTodo);
}

export function* watchUpdateTodo() {
  yield takeLatest(Constants.UPDATE_TODO, updateTodo);
}

export function* watchDeleteTodo() {
  yield takeLatest(Constants.DELETE_TODO, deleteTodo);
}

export function* watchCreateTodoItem() {
  yield takeLatest(Constants.CREATE_TODO_ITEM, createTodoItem);
}

export function* watchUpdateTodoItem() {
  yield takeLatest(Constants.UPDATE_TODO_ITEM, updateTodoItem);
}

export function* watchCompleteTodoItem() {
  yield takeLatest(Constants.COMPLETE_TODO_ITEM, completeTodoItem);
}

export function* watchDeleteTodoItem() {
  yield takeLatest(Constants.DELETE_TODO_ITEM, deleteTodoItem);
}
