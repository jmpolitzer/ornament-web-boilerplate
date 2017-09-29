import * as Constants from './constants';

const initialState = {
  todoList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todoList: action.todos
      }

      case Constants.CREATE_TODO_SUCCESS:
        return {
          ...state
        }

    default:
      return state;
  }
}
