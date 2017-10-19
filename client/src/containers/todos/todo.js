import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';
// import R from 'ramda';
import EditTodoForm from '../forms/todos/editTodo';
import CreateTodoItemForm from '../forms/todos/createTodoItem';
import TodoItemList from './todoItemList';
import { showFormErrors } from '../forms/utils';
const R = require('ramda');

export default class Todo extends React.Component {
  constructor() {
    super();

    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleEditTodoForm = this.toggleEditTodoForm.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.createTodoItem = this.createTodoItem.bind(this);
    this.toggleTodoItems = this.toggleTodoItems.bind(this);
    this.expandOrCollapseVerbiage = this.expandOrCollapseVerbiage.bind(this);
  }

  deleteTodo() {
    this.props.deleteTodo(this.props.todo.id);
  }

  toggleEditTodoForm() {
    this.props.toggleEditTodoForm(this.props.todo.id);
  }

  editTodo() {
    const id = this.props.todo.id;

    if(!this.props[`editTodoForm-${id}`].values.title) {
      throw new SubmissionError({
        content: 'Your todo list needs a name!'
      });
    } else {
      this.props.updateTodo(id, this.props[`editTodoForm-${id}`].values);
    }
  }

  createTodoItem() {
    const id = this.props.todo.id;

    if(!this.props[`createTodoItemForm-${id}`].values) {
      throw new SubmissionError({
        content: 'You must write something for your todo!'
      });
    } else {
      this.props.createTodoItem(id, this.props[`createTodoItemForm-${id}`].values);
    }
  }

  toggleTodoItems() {
    this.props.toggleTodoItems(this.props.todo.id);
  }

  expandOrCollapseVerbiage() {
    return R.contains(this.props.todo.id, this.props.isShowingTodoItems) ? 'chevron up' : 'tasks';
  }

  render() {
    const editTodoForm = `editTodoForm-${this.props.todo.id}`;
    const createTodoItemForm = `createTodoItemForm-${this.props.todo.id}`;

    return <div>
      {R.contains(this.props.todo.id, this.props.isEditingTodo) ?
      <EditTodoForm onSubmit={this.editTodo}
                    initialValues={this.props.todo}
                    form={editTodoForm}
                    {...this.props}
                    formError={showFormErrors(this.props[editTodoForm]) ?
                    this.props[editTodoForm].submitErrors.content :
                    undefined} /> :
      <Grid verticalAlign='middle'>
        <Grid.Column width={12}>
          <h3 onClick={this.toggleEditTodoForm}>{this.props.todo.title}</h3>
        </Grid.Column>
        <Grid.Column width={4}>
          <Button floated='right' basic icon='trash outline' color='pink' onClick={this.deleteTodo}></Button>
          <Button floated='right' basic icon={this.expandOrCollapseVerbiage()} color='teal' onClick={this.toggleTodoItems}></Button>
        </Grid.Column>
      </Grid>}
    {R.contains(this.props.todo.id, this.props.isShowingTodoItems) &&
    <div>
      <CreateTodoItemForm onSubmit={this.createTodoItem}
                          form={createTodoItemForm}
                          {...this.props}
                          formError={showFormErrors(this.props[createTodoItemForm]) ?
                          this.props[createTodoItemForm].submitErrors.content :
                          undefined} />
      {this.props.todo.todoItems.length > 0 && <TodoItemList {...this.props} />}
    </div>}
  </div>
  }
}
