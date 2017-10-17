import React from 'react';
// import R from 'ramda';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Header, Container, Segment } from 'semantic-ui-react';
import CreateTodoForm from '../forms/todos/createTodo';
import { SubmissionError } from 'redux-form';
import { showFormErrors } from '../forms/utils';
import Todo from '../todos/todo';
import { fetchTodos, createTodo, updateTodo,
         deleteTodo, createTodoItem, updateTodoItem,
         completeTodoItem, deleteTodoItem, toggleEditTodoForm,
         toggleEditTodoItemForm, toggleTodoItems } from '../../redux/todos/actions';

const R = require('ramda');
const axios = require('axios');
const { Cookies } = require('react-cookie');
const cookies = new Cookies();

class Home extends React.Component {
  componentDidMount() {
    this.submit = this.submit.bind(this);

    axios.defaults.headers.common['Authorization'] = `JWT ${cookies.get('ornament-token')}`
    this.props.fetchTodos();
  }

  submit() {
    if(!this.props.createTodoForm.values) {
      throw new SubmissionError({
        text: 'You must give your list a name!'
      });
    } else {
      this.props.createTodo(this.props.createTodoForm.values);
    }
  }

  render() {
    return <div>
      <Header
        as='h3'
        content='Litster'
        textAlign='center'>
      </Header>
      <Container textAlign='center'>
        <Grid centered verticalAlign='middle' style={{ height: '100%' }}>
          <Grid.Column style={{ maxWidth: 700 }}>
            <Segment.Group>
              <Segment>
                <CreateTodoForm onSubmit={this.submit}
                                formError={showFormErrors(this.props.createTodoForm) ? this.props.createTodoForm.submitErrors.text : undefined} />
              </Segment>
              {this.props.todoList.map((todo, i) => {
                return <Segment key={i}>
                <Todo todo={todo} {...this.props} />
              </Segment>
              })}
            </Segment.Group>
          </Grid.Column>
        </Grid>
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
