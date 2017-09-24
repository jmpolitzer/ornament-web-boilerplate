import { all } from 'redux-saga/effects';
import { fetchTodos, createTodo, updateTodo,
         deleteTodo, createTodoItem, updateTodoItem,
         completeTodoItem, deleteTodoItem } from './todos/sagas';

export default function* rootSaga() {
  yield all([
    fetchTodos(),
    createTodo(),
    updateTodo(),
    deleteTodo(),
    createTodoItem(),
    updateTodoItem(),
    completeTodoItem(),
    deleteTodoItem()
  ])
}
