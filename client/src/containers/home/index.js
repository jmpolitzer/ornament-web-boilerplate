import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import CreateTodoForm from '../forms/todos/createTodo';
import Todo from '../todos/todo';
import { fetchTodos, createTodo, updateTodo,
         deleteTodo, createTodoItem, updateTodoItem,
         completeTodoItem, deleteTodoItem, toggleEditTodoForm } from '../../redux/todos/actions';

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
            <Table responsive>
              <thead>
                <tr>
                  <th>Complete</th>
                  <th>Task</th>
                </tr>
              </thead>
              <tbody>
                {todo.todoItems && todo.todoItems.map((item, j) => {
                  return <tr key={j}>
                    <td>{item.complete ? 'si' : 'no'}</td>
                    <td>{item.content}</td>
                  </tr>
                })}
              </tbody>
            </Table>
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
    createTodoForm: state.form.createTodo
  };

  state.todos.isEditingTodo.forEach((todoId) => {
    proppedState[`editTodoForm-${todoId}`] = state.form[`editTodoForm-${todoId}`];
  })

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
  changePage: () => push('/about-us')
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
