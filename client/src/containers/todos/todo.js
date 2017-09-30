import React from 'react';
import { Row, Button, ButtonGroup } from 'react-bootstrap';

export default class Todo extends React.Component {
  constructor() {
    super();

    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo() {
    this.props.deleteTodo(this.props.todo.id);
  }

  render() {
    return <Row className="show-grid">
      <h3>{this.props.todo.title}</h3>
      <ButtonGroup>
        <Button bsStyle="success">Edit</Button>
        <Button bsStyle="danger" onClick={this.deleteTodo}>Delete</Button>
      </ButtonGroup>
    </Row>
  }
}
