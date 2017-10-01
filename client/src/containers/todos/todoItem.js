import React from 'react';
import { Button } from 'react-bootstrap';
import EditTodoItemForm from '../forms/todos/editTodoItem';

export default class TodoItem extends React.Component {
  constructor() {
    super();

    this.editTodoItem = this.editTodoItem.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
  }

  editTodoItem() {
    const itemId = this.props.item.id;

    this.props.updateTodoItem(itemId, this.props[`editTodoItemForm-${itemId}`].values);
  }

  deleteTodoItem() {
    this.props.deleteTodoItem(this.props.item);
  }

  render() {
    return <tr>
      <td>{this.props.item.complete ? 'si' : 'no'}</td>
      <td><EditTodoItemForm onSubmit={this.editTodoItem}
                            initialValues={this.props.item}
                            form={`editTodoItemForm-${this.props.item.id}`} /></td>
      <td><Button bsStyle="danger" onClick={this.deleteTodoItem}>Delete</Button></td>
      <td>Complete</td>
    </tr>
  }
}
