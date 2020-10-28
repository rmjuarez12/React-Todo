// Import Dependencies
import React, { Component } from 'react';
import { gsap } from "gsap";

export default class TodoForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      disableButtons: false,
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

    // Check first if the field is not empty
    if(this.state.name === "" || this.state.name === null) {
      // Do a small animation and disable buttons temporarily
      const errorAnim = gsap.timeline({ repeat: 0, repeatDelay: 0 });
      errorAnim.to("#App", { x: -50, duration: 0.2 });
      errorAnim.to("#App", { x: 50, duration: 0.2 });
      errorAnim.to("#App", { x: -20, duration: 0.2 });
      errorAnim.to("#App", { x: 20, duration: 0.2 });
      errorAnim.to("#App", { x: 0, duration: 0.2 });

      this.setState({
        disableButtons: true
      })

      setTimeout(() => {
        this.setState({
          disableButtons: false
        })
      }, 1000)
      return;
    }

    // Add task
    this.props.addTask(this.state.name);

    // Reset form
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
            <input type="submit" value="Add Todo" className="btn" disabled={this.state.disableButtons} />
            <button 
              className="btn" 
              onClick={(e) => {
                e.preventDefault();
                this.props.removeCompleted();
              }}
              disabled={this.state.disableButtons}
            >
              Clear Completed
            </button>
          </div>
          
        </form>
      </div>
    )
  }
}
