// import R from 'ramda';
import * as Constants from './constants';

const R = require('ramda');

const initialState = {
  todoList: [],
  isEditingTodo: [],
  isEditingTodoItem: [],
  isShowingTodoItems: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todoList: action.todos
      }

    /* TODO: Do we need this? */
    case Constants.CREATE_TODO_SUCCESS:
      return {
        ...state
      }

    /* TODO: Do we need this? */
    case Constants.DELETE_TODO_SUCCESS:
      return {
        ...state
      }

    /* TODO: Do we need this? */
    case Constants.UPDATE_TODO_SUCCESS:
      return {
        ...state
      }

    /* TODO: Do we need this? */
    case Constants.CREATE_TODO_ITEM_SUCCESS:
      return {
        ...state
      }

    /* TODO: Do we need this? */
    case Constants.DELETE_TODO_ITEM_SUCCESS:
      return {
        ...state
      }

    case Constants.IS_EDITING_TODO:
      /* TODO: Make this prettier. */
      const editableTodos = R.contains(action.id, state.isEditingTodo) ?
                        R.reject(R.equals(action.id), state.isEditingTodo) :
                        R.append(action.id, state.isEditingTodo);

      return {
        ...state,
        isEditingTodo: editableTodos
      }

    case Constants.IS_EDITING_TODO_ITEM:
      /* TODO: Make this prettier. */
      const editableTodoItems = R.contains(action.id, state.isEditingTodoItem) ?
                        R.reject(R.equals(action.id), state.isEditingTodoItem) :
                        R.append(action.id, state.isEditingTodoItem);

      return {
        ...state,
        isEditingTodoItem: editableTodoItems
      }

    case Constants.IS_SHOWING_TODO_ITEMS:
    /* TODO: Make this prettier. */
      const showingTodoItems = R.contains(action.id, state.isShowingTodoItems) ?
                        R.reject(R.equals(action.id), state.isShowingTodoItems) :
                        R.append(action.id, state.isShowingTodoItems);

      return {
        ...state,
        isShowingTodoItems: showingTodoItems,
      }

    default:
      return state;
  }
}
