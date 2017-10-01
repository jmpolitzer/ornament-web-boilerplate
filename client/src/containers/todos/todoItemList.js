import React from 'react';
import { Row, Table } from 'react-bootstrap';

export default class TodoItemList extends React.Component {
  render() {
    return <Row>
      <Table responsive>
        <thead>
          <tr>
            <th>Done</th>
            <th>Task</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Complete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.todo.todoItems && this.props.todo.todoItems.map((item, j) => {
            return <tr key={j}>
              <td>{item.complete ? 'si' : 'no'}</td>
              <td>{item.content}</td>
              <td>Edit</td>
              <td>Delete</td>
              <td>Complete</td>
            </tr>
          })}
        </tbody>
      </Table>
    </Row>
  }
}
