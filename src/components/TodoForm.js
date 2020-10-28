// Import Dependencies
import React, { Component } from 'react';

export default class TodoForm extends Component {
  constructor() {
    super();

    this.state = {
      name: ""
    }
  }

  // Function that updates the state to the input field
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  // Function that handles the form submission.
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addTask(this.state.name);

    this.setState({
      name: ""
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Add Todo Item..." value={this.state.name} onChange={this.handleChange} />

          <div className="btns">
            <input type="submit" value="Add Todo" className="btn" />
            <button 
              className="btn" 
              onClick={(e) => {
                e.preventDefault();
                this.props.removeCompleted();
              }}
            >
              Clear Completed
            </button>
          </div>
          
        </form>
      </div>
    )
  }
}
