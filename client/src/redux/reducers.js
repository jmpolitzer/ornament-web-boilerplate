import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import todosReducer from './todos/reducer.js';

export default combineReducers({
  routing: routerReducer,
  todos: todosReducer,
  form: formReducer
});
