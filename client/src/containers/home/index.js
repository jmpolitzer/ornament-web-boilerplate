import React from 'react';
import R from 'ramda';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import CreateTodoForm from '../forms/todos/createTodo';
import Todo from '../todos/todo';
import { fetchTodos, createTodo, updateTodo,
         deleteTodo, createTodoItem, updateTodoItem,
         completeTodoItem, deleteTodoItem, toggleEditTodoForm,
         toggleEditTodoItemForm } from '../../redux/todos/actions';

class Home extends React.Component {
  componentDidMount() {
    this.submit = this.submit.bind(this);

    this.props.fetchTodos();
  }

  submit() {
    this.props.createTodo(this.props.createTodoForm.values);
  }

  render() {
    return <Grid>
      <Row className="show-grid">
        <Col md={3}>
          <h1>Todos</h1>
        </Col>
        <Col md={9}>
          <CreateTodoForm onSubmit={this.submit} />
        </Col>
      </Row>
      <Row className="show-grid">
        <Col md={12}>
          {this.props.todoList.map((todo, i) => {
            return <div key={i}>
            <Todo todo={todo} {...this.props} />
          </div>
          })}
        </Col>
      </Row>
    </Grid>
  }
}

const mapStateToProps = state => {
  let proppedState = {
    todoList: state.todos.todoList,
    isEditingTodo: state.todos.isEditingTodo,
    isEditingTodoItem: state.todos.isEditingTodoItem,
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
  changePage: () => push('/about-us')
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
