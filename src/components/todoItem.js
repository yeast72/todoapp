import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {done: false};
    this.handleClick = this.handleClick.bind(this);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  handleClick() {
    this.setState({done: !this.state.done});
  }

  render() {
    return (
      <div className="todo-container" onClick={this.handleClick}>
        <span className={this.state.done ? "text-done" : "text"}>{this.props.todo.text}</span>
        <button className="btn-remove" onClick={(e)=> this.removeTodo(this.props.id)}> remove </button>
      </div>
    )
  }
}
