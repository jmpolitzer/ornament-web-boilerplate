import React from 'react';
import { Button } from 'react-bootstrap';

export default class TodoItem extends React.Component {
  constructor() {
    super();

    this.deleteTodoItem = this.deleteTodoItem.bind(this);
  }

  deleteTodoItem() {
    this.props.deleteTodoItem(this.props.item);
  }

  render() {
    return <tr>
      <td>{this.props.item.complete ? 'si' : 'no'}</td>
      <td>{this.props.item.content}</td>
      <td>Edit</td>
      <td><Button bsStyle="danger" onClick={this.deleteTodoItem}>Delete</Button></td>
      <td>Complete</td>
    </tr>
  }
}
