import React from 'react';
import { Table, Button, Checkbox } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';
// import R from 'ramda';
import EditTodoItemForm from '../forms/todos/editTodoItem';
import { showFormErrors } from '../forms/utils';
const R = require('ramda');

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

    if(!this.props[`editTodoItemForm-${itemId}`].values.title) {
      throw new SubmissionError({
        content: 'Your todo has have something in it!'
      });
    } else {
      this.props.updateTodoItem(itemId, this.props[`editTodoItemForm-${itemId}`].values);
    }
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
    const editTodoItemForm = `editTodoItemForm-${this.props.item.id}`;

    return <Table.Row>
      <Table.Cell><Checkbox checked={this.props.item.complete}
                    onChange={this.toggleItemComplete}
                    label={{children: 'complete'}} /></Table.Cell>
      <Table.Cell>{R.contains(this.props.item.id, this.props.isEditingTodoItem) ?
        <EditTodoItemForm onSubmit={this.editTodoItem}
                          initialValues={this.props.item}
                          form={editTodoItemForm}
                          formError={showFormErrors(this.props[editTodoItemForm]) ?
                          this.props[editTodoItemForm].submitErrors.content :
                          undefined} /> :
        <p onClick={this.toggleEditTodoItemForm}>{this.props.item.content}</p>}</Table.Cell>
      <Table.Cell><Button basic color='blue' onClick={this.deleteTodoItem}>Delete</Button></Table.Cell>
    </Table.Row>
  }
}
