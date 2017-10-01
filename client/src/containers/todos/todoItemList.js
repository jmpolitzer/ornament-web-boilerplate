import React from 'react';
import { Row, Table } from 'react-bootstrap';
import TodoItem from './todoItem';

export default class TodoItemList extends React.Component {
  render() {
    return <Row>
      <Table responsive>
        <thead>
          <tr>
            <th>Done</th>
            <th>Task</th>
            <th>Delete</th>
            <th>Complete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.todo.todoItems && this.props.todo.todoItems.map((item, i) => {
            return <TodoItem key={i} item={item} {...this.props} />
          })}
        </tbody>
      </Table>
    </Row>
  }
}
