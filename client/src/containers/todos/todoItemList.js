import React from 'react';
import { Table } from 'semantic-ui-react';
import TodoItem from './todoItem';

export default class TodoItemList extends React.Component {
  render() {
    return <Table celled striped>
      <Table.Body>
        {this.props.todo.todoItems && this.props.todo.todoItems.map((item, i) => {
          return <TodoItem key={i} item={item} {...this.props} />
        })}
      </Table.Body>
    </Table>
  }
}
