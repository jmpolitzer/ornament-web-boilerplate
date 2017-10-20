import React from 'react';
import { Segment, Grid, Icon, Checkbox } from 'semantic-ui-react';
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

    if(!this.props[`editTodoItemForm-${itemId}`].values.content) {
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

    return <Segment disabled={this.props.item.complete}>
        {R.contains(this.props.item.id, this.props.isEditingTodoItem) ?
          <EditTodoItemForm onSubmit={this.editTodoItem}
                            initialValues={this.props.item}
                            form={editTodoItemForm}
                            {...this.props}
                            formError={showFormErrors(this.props[editTodoItemForm]) ?
                            this.props[editTodoItemForm].submitErrors.content :
                            undefined} /> :
    <Grid>
      <Grid.Column width={1}>
        <Checkbox checked={this.props.item.complete}
                  onChange={this.toggleItemComplete} />
      </Grid.Column>
      <Grid.Column width={13}>
          <p onClick={this.toggleEditTodoItemForm}>{this.props.item.content}</p>
      </Grid.Column>
      <Grid.Column width={2}>
        <Icon style={{float:'right'}} size='large' color='pink' name='trash' onClick={this.deleteTodoItem}/>
      </Grid.Column>
    </Grid>}
  </Segment>
  }
}
