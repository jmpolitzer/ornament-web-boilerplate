import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import todosReducer from './todos/reducer.js';
import * as TodosConstants from './todos/constants';

export default combineReducers({
  routing: routerReducer,
  todos: todosReducer,
  form: formReducer.plugin({
    createTodo: (state, action) => {
      switch(action.type) {
        case TodosConstants.CREATE_TODO_SUCCESS:
          return undefined;
        default:
          return state;
      }
    }
  })
});
