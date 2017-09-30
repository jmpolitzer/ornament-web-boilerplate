import * as Constants from './constants';

/* These action creators are piped into the home/index.js file. When a user clicks a button
to fire them off, our sagas will be listening. */
export const fetchTodos = () => {
  return {
    type: Constants.FETCH_TODOS
  }
}

export const createTodo = (form) => {
  return {
    type: Constants.CREATE_TODO,
    form
  }
}

export const updateTodo = (form) => {
  return {
    type: Constants.UPDATE_TODO,
    form
  }
}

export const deleteTodo = (id) => {
  return {
    type: Constants.DELETE_TODO,
    id
  }
}

export const createTodoItem = () => {
  return {
    type: Constants.CREATE_TODO_ITEM
  }
}

export const updateTodoItem = () => {
  return {
    type: Constants.UPDATE_TODO_ITEM
  }
}

export const completeTodoItem = () => {
  return {
    type: Constants.COMPLETE_TODO_ITEM
  }
}

export const deleteTodoItem = () => {
  return {
    type: Constants.DELETE_TODO_ITEM
  }
}

export const toggleEditTodoForm = (id) => {
  console.log('request to TOGGLE edit todo form for: ', id);
  return {
    type: Constants.IS_EDITING_TODO
  }
}
