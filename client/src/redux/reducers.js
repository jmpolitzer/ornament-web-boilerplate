import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth/reducer.js';
import todosReducer from './todos/reducer.js';

export default combineReducers({
  routing: routerReducer,
  auth: authReducer,
  todos: todosReducer,
  form: formReducer
});
