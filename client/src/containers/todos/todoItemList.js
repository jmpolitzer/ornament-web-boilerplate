import React from 'react';
import TodoItem from './todoItem';

export default class TodoItemList extends React.Component {
  render() {
    return <div>
      {this.props.todo.todoItems && this.props.todo.todoItems.map((item, i) => {
        return <TodoItem key={i} item={item} {...this.props} />
      })}
    </div>
  }
}
