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
        <Col md={6}>
          <h3>Open</h3>
          <Table responsive>
            <thead>
              <tr>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {this.props.todoList.map((todo, i) => {
                return <tr key={i}><td>{todo.title}</td></tr>;
              })}
            </tbody>
          </Table>
        </Col>
        <Col md={6}>
          <h3>Closed</h3>
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
