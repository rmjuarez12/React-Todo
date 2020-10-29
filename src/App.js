// Import Dependencies
import React from 'react';
import { gsap } from "gsap";

// Import Components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// Import Assets
import './assets/App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();

    this.state = {
      todoItems: JSON.parse(localStorage.getItem('myTasks')) || []
    }
  }

  // Function to add a new task
  addTask = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      todoItems: [...this.state.todoItems, newTask]
    });

    localStorage.setItem('myTasks', JSON.stringify([...this.state.todoItems, newTask]));
  }

  // Function to remove tasks marked as completed
  removeCompleted = () => {
    const removeCompleted = this.state.todoItems.filter((item) => item.completed !== true);

    // Do a small animation to remove completed
    gsap.to(".task-list .completed label", {scale: 0.8, duration: 0.5});
    gsap.to(".task-list .completed label", {x: -200, duration: 0.5, delay: 0.5});
    gsap.to(".task-list .completed", {opacity: 0, height: 0, delay: 0.5});

    setTimeout(() => {
      this.setState({
        todoItems: removeCompleted
      });

      localStorage.setItem('myTasks', JSON.stringify(removeCompleted));
    }, 1000)
  }

  // Function to toggle the task completed state to either true/false
  toggleCompleted = (id) => {
    const toggledTask = this.state.todoItems.map((item) => {
      if(item.id === id) {
        return {...item, completed: !item.completed}
      }
      
      return item;
    });

    this.setState({
      todoItems: toggledTask
    })

    localStorage.setItem('myTasks', JSON.stringify(toggledTask));
  }

  render() {
  
    // Create a variable that will display how many tasks have you completed
    let pendingTasksCount;
    if(this.state.todoItems.length > 0) {
      pendingTasksCount = `${this.state.todoItems.filter((task) => task.completed === true).length} / ${this.state.todoItems.length} Tasks completed.
                          ${this.state.todoItems.filter((task) => task.completed === true).length === this.state.todoItems.length ? 'All tasks done, hurray!' : ''}`;
    } else {
      pendingTasksCount = "Seems we got no tasks, we need to add some!";
    }

    return (
      <div id="App">
        <h2>Tasks to finish today!</h2>

        <TodoForm addTask={this.addTask} removeCompleted={this.removeCompleted} />

        <p>{pendingTasksCount}</p>

        <TodoList todoItems={this.state.todoItems} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
