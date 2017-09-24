import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todosReducer from './todos/reducer.js';

export default combineReducers({
  routing: routerReducer,
  todos: todosReducer
});
