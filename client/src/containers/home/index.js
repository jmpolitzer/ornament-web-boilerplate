import React from 'react';
// import R from 'ramda';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, Container, Segment } from 'semantic-ui-react';
import CreateTodoForm from '../forms/todos/createTodo';
import Todo from '../todos/todo';
import { fetchTodos, createTodo, updateTodo,
         deleteTodo, createTodoItem, updateTodoItem,
         completeTodoItem, deleteTodoItem, toggleEditTodoForm,
         toggleEditTodoItemForm, toggleTodoItems } from '../../redux/todos/actions';

const R = require('ramda');

class Home extends React.Component {
  componentDidMount() {
    this.submit = this.submit.bind(this);

    this.props.fetchTodos();
  }

  submit() {
    this.props.createTodo(this.props.createTodoForm.values);
  }

  render() {
    return <div>
      <Header
        as='h3'
        content='Lists'
        textAlign='center'>
      </Header>
      <Container text>
        <Segment.Group>
          <Segment><CreateTodoForm onSubmit={this.submit} /></Segment>
          {this.props.todoList.map((todo, i) => {
            return <Segment key={i}>
            <Todo todo={todo} {...this.props} />
          </Segment>
          })}
        </Segment.Group>
      </Container>
    </div>
  }
}

const mapStateToProps = state => {
  let proppedState = {
    todoList: state.todos.todoList,
    isEditingTodo: state.todos.isEditingTodo,
    isEditingTodoItem: state.todos.isEditingTodoItem,
    isShowingTodoItems: state.todos.isShowingTodoItems,
    createTodoForm: state.form.createTodoForm
  };

  /* Since we have multiple forms of the same type on each page, we need to dynamically name them.
  Below is simply looking for those dynamically-named forms and adding them to our props. */
  state.todos.isEditingTodo.forEach((todoId) => {
    proppedState[`editTodoForm-${todoId}`] = state.form[`editTodoForm-${todoId}`];
  });

  R.pluck('id')(state.todos.todoList).forEach((todoId) => {
    proppedState[`createTodoItemForm-${todoId}`] = state.form[`createTodoItemForm-${todoId}`];
  });

  R.pluck('id')(R.flatten((R.pluck('todoItems')(state.todos.todoList)))).forEach((todoItemId) => {
    proppedState[`editTodoItemForm-${todoItemId}`] = state.form[`editTodoItemForm-${todoItemId}`];
  });

  return proppedState;
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  createTodoItem,
  updateTodoItem,
  completeTodoItem,
  deleteTodoItem,
  toggleEditTodoForm,
  toggleEditTodoItemForm,
  toggleTodoItems,
  changePage: () => push('/about-us')
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
