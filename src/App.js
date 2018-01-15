import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos : [
        {id: 0, text: "Make me happy tonight!"},
        {id: 1, text: "Sleep to night!"},
        {id: 2, text: "Wake up tomorrow"}
      ],
      nextId: 3
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({id:this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: this.state.nextId + 1
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput addTodo={this.addTodo} />
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
