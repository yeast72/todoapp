import React from 'react';

export default class TodoInput extends React.Component {
  constructor (props) {
    super(props)

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.addTodo(this.state.value);
  }

  handleChange(e) {
    this.setState({value: e.target.value });
  }

addTodo(todo) {
  if(todo.length > 0){
    this.props.addTodo(todo);
    this.setState({
      value: ''
    });
  }

}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
          <button className="btn btn-primary"> Submit </button>
        </form>
      </div>
    )
  }
}
