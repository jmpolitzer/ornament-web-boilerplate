import React from 'react';
import { Row, Button, ButtonGroup } from 'react-bootstrap';
import R from 'ramda';
import EditTodoForm from '../forms/todos/editTodo';

export default class Todo extends React.Component {
  constructor() {
    super();

    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleEditTodoForm = this.toggleEditTodoForm.bind(this);
    this.editTodo = this.editTodo.bind(this);
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

  render() {
    return <Row className="show-grid">
      {R.contains(this.props.todo.id, this.props.isEditingTodo) ?
      <EditTodoForm onSubmit={this.editTodo} form={`editTodoForm-${this.props.todo.id}`} {...this.props} /> :
      <div>
        <h3>{this.props.todo.title}</h3>
        <ButtonGroup>
          <Button bsStyle="success" onClick={this.toggleEditTodoForm}>Edit</Button>
          <Button bsStyle="danger" onClick={this.deleteTodo}>Delete</Button>
        </ButtonGroup>
      </div>}
    </Row>
  }
}
