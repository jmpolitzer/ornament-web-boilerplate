import { all } from 'redux-saga/effects';
import { watchFetchTodos, watchCreateTodo, watchUpdateTodo,
         watchDeleteTodo, watchCreateTodoItem, watchUpdateTodoItem,
         watchCompleteTodoItem, watchDeleteTodoItem } from './todos/sagas';
import { watchLogin, watchLogout } from './auth/sagas';

export default function* rootSaga() {
  yield all([
    watchFetchTodos(),
    watchCreateTodo(),
    watchUpdateTodo(),
    watchDeleteTodo(),
    watchCreateTodoItem(),
    watchUpdateTodoItem(),
    watchCompleteTodoItem(),
    watchDeleteTodoItem(),
    watchLogin(),
    watchLogout()
  ])
}
