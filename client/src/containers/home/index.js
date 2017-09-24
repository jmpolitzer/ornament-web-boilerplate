import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTodos, createTodo, updateTodo,
         deleteTodo, createTodoItem, updateTodoItem,
         completeTodoItem, deleteTodoItem } from '../../redux/todos/actions';
import { Grid, Row, Col, Table } from 'react-bootstrap';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return <Grid>
      <Row className="show-grid">
        <Col md={12}>
          <h1>Todos</h1>
          {this.props.todoList.map((todo, i) => {
            return <div key={i}><h3>{todo.title}</h3>
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

const mapStateToProps = state => ({
  todoList: state.todos.todoList
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  createTodoItem,
  updateTodoItem,
  completeTodoItem,
  deleteTodoItem,
  changePage: () => push('/about-us')
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
