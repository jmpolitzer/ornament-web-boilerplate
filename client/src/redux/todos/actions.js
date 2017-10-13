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

export const updateTodo = (id, form) => {
  return {
    type: Constants.UPDATE_TODO,
    id,
    form
  }
}

export const deleteTodo = (id) => {
  return {
    type: Constants.DELETE_TODO,
    id
  }
}

export const createTodoItem = (id, form) => {
  return {
    type: Constants.CREATE_TODO_ITEM,
    id,
    form
  }
}

export const updateTodoItem = (id, form) => {

  return {
    type: Constants.UPDATE_TODO_ITEM,
    id,
    form
  }
}

export const completeTodoItem = (item) => {
  return {
    type: Constants.COMPLETE_TODO_ITEM,
    item
  }
}

export const deleteTodoItem = (item) => {
  return {
    type: Constants.DELETE_TODO_ITEM,
    item
  }
}

export const toggleEditTodoForm = (id) => {
  return {
    type: Constants.IS_EDITING_TODO,
    id
  }
}

export const toggleEditTodoItemForm = (id) => {
  return {
    type: Constants.IS_EDITING_TODO_ITEM,
    id
  }
}

export const toggleTodoItems = (id) => {
  return {
    type: Constants.IS_SHOWING_TODO_ITEMS,
    id
  }
}
