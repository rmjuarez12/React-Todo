// Import Dependencies
import React, { Component } from 'react';

export default class TodoForm extends Component {
  constructor() {
    super();

    this.state = {
      name: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  
  render() {
    return (
      <div>
        <form>
          <input type="text" name="name" placeholder="Add Todo Item..." value={this.state.name} onChange={this.handleChange} />

          <input type="submit" value="Add Todo" />
        </form>

        <button>Clear Completed</button>
      </div>
    )
  }
}
