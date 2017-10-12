import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
// import R from 'ramda';
import EditTodoForm from '../forms/todos/editTodo';
import CreateTodoItemForm from '../forms/todos/createTodoItem';
import TodoItemList from './todoItemList';
const R = require('ramda');

export default class Todo extends React.Component {
  constructor() {
    super();

    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleEditTodoForm = this.toggleEditTodoForm.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.createTodoItem = this.createTodoItem.bind(this);
    this.toggleTodoItems = this.toggleTodoItems.bind(this);
  }

  deleteTodo() {
    this.props.deleteTodo(this.props.todo.id);
  }

  toggleEditTodoForm() {
    this.props.toggleEditTodoForm(this.props.todo.id);
  }

  editTodo() {
    const id = this.props.todo.id;

    this.props.updateTodo(id, this.props[`editTodoForm-${id}`].values);
  }

  createTodoItem() {
    const id = this.props.todo.id;

    this.props.createTodoItem(id, this.props[`createTodoItemForm-${id}`].values);
  }

  toggleTodoItems() {
    this.props.toggleTodoItems(this.props.todo.id);
  }

  render() {
    return <div><Grid.Row className="show-grid">
      {R.contains(this.props.todo.id, this.props.isEditingTodo) ?
      <EditTodoForm onSubmit={this.editTodo}
                    initialValues={this.props.todo}
                    form={`editTodoForm-${this.props.todo.id}`}
                    {...this.props} /> :
      <div>
        <Grid.Column>
          <h3>{this.props.todo.title}</h3>
          <Button basic color='teal' onClick={this.toggleTodoItems}>Expand</Button>
          <Button basic color='yellow' onClick={this.toggleEditTodoForm}>Edit</Button>
          <Button basic color='red' onClick={this.deleteTodo}>Delete</Button>
        </Grid.Column>
      </div>}
    </Grid.Row>
    {R.contains(this.props.todo.id, this.props.isShowingTodoItems) &&
    <div>
      <CreateTodoItemForm onSubmit={this.createTodoItem} form={`createTodoItemForm-${this.props.todo.id}`} {...this.props} />
      <TodoItemList {...this.props} />
    </div>}
  </div>
  }
}
