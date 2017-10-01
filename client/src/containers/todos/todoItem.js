import React from 'react';
import { Button, Checkbox } from 'react-bootstrap';
import R from 'ramda';
import EditTodoItemForm from '../forms/todos/editTodoItem';

export default class TodoItem extends React.Component {
  constructor() {
    super();

    this.editTodoItem = this.editTodoItem.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.toggleEditTodoItemForm = this.toggleEditTodoItemForm.bind(this);
    this.toggleItemComplete = this.toggleItemComplete.bind(this);
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

  toggleItemComplete() {
    this.props.completeTodoItem(this.props.item);
  }

  render() {
    return <tr>
      <td><Checkbox checked={this.props.item.complete}
                    onChange={this.toggleItemComplete} /></td>
      <td>{R.contains(this.props.item.id, this.props.isEditingTodoItem) ?
        <EditTodoItemForm onSubmit={this.editTodoItem}
                          initialValues={this.props.item}
                          form={`editTodoItemForm-${this.props.item.id}`} /> :
        <p onClick={this.toggleEditTodoItemForm}>{this.props.item.content}</p>}</td>
      <td><Button bsStyle="danger" onClick={this.deleteTodoItem}>Delete</Button></td>
    </tr>
  }
}
