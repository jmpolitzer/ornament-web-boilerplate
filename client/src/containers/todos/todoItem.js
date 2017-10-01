import React from 'react';
import { Button } from 'react-bootstrap';
import R from 'ramda';
import EditTodoItemForm from '../forms/todos/editTodoItem';

export default class TodoItem extends React.Component {
  constructor() {
    super();

    this.editTodoItem = this.editTodoItem.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.toggleEditTodoItemForm = this.toggleEditTodoItemForm.bind(this);
  }

  editTodoItem() {
    const itemId = this.props.item.id;

    this.props.updateTodoItem(itemId, this.props[`editTodoItemForm-${itemId}`].values);
  }

  deleteTodoItem() {
    this.props.deleteTodoItem(this.props.item);
  }

  toggleEditTodoItemForm() {
    this.props.toggleEditTodoItemForm(this.props.item.id);
  }

  render() {
    return <tr>
      <td>{this.props.item.complete ? 'si' : 'no'}</td>
      <td>{R.contains(this.props.item.id, this.props.isEditingTodoItem) ?
                          <EditTodoItemForm onSubmit={this.editTodoItem}
                                            initialValues={this.props.item}
                                            form={`editTodoItemForm-${this.props.item.id}`} /> :
                          <p onClick={this.toggleEditTodoItemForm}>{this.props.item.content}</p>}</td>
      <td><Button bsStyle="danger" onClick={this.deleteTodoItem}>Delete</Button></td>
      <td>Complete</td>
    </tr>
  }
}
