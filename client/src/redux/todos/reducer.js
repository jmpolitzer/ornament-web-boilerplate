import * as Constants from './constants';

const initialState = {
  todoList: [],
  isEditingTodo: false
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

    case Constants.IS_EDITING_TODO:
      return {
        ...state,
        isEditingTodo: !state.isEditingTodo
      }

    default:
      return state;
  }
}
