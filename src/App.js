// Import Dependencies
import React from 'react';

// Import Components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const dummyData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();

    this.state = {
      todoItems: dummyData
    }
  }

  render() {
    console.log("rr: todoItems State: App.js:", this.state.todoItems);

    return (
      <div id="App">
        <h2>Welcome to your Todo App!</h2>

        <TodoList todoItems={this.state.todoItems} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
