import React from 'react';
import { Segment } from 'semantic-ui-react';
import TodoItem from './todoItem';

export default class TodoItemList extends React.Component {
  render() {
    return <Segment>
      {this.props.todo.todoItems && this.props.todo.todoItems.map((item, i) => {
        return <TodoItem key={i} item={item} {...this.props} />
      })}
    </Segment>
  }
}
