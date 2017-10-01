import React from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import R from 'ramda';
import EditTodoForm from '../forms/todos/editTodo';
import CreateTodoItemForm from '../forms/todos/createTodoItem';
import TodoItemList from './todoItemList';

export default class Todo extends React.Component {
  constructor() {
    super();

    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleEditTodoForm = this.toggleEditTodoForm.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.createTodoItem = this.createTodoItem.bind(this);
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

  render() {
    return <div><Row className="show-grid">
      {R.contains(this.props.todo.id, this.props.isEditingTodo) ?
      <EditTodoForm onSubmit={this.editTodo}
                    initialValues={this.props.todo}
                    form={`editTodoForm-${this.props.todo.id}`}
                    {...this.props} /> :
      <div>
        <Col xs={12} md={8}>
          <h3>{this.props.todo.title}</h3>
        </Col>
        <Col xs={6} md={4}>
          <ButtonGroup>
            <Button bsStyle="default" onClick={this.toggleEditTodoForm}>Edit</Button>
            <Button bsStyle="danger" onClick={this.deleteTodo}>Delete</Button>
          </ButtonGroup>
        </Col>
      </div>}
    </Row>
    <CreateTodoItemForm onSubmit={this.createTodoItem}
                        form={`createTodoItemForm-${this.props.todo.id}`}
                        {...this.props} />
    <TodoItemList {...this.props} />
  </div>
  }
}
