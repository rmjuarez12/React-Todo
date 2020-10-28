// Import Dependencies
import React from 'react';

// Import Components
import Todo from './Todo';

export default function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todoItems.map((item) => {
          return <Todo todoItem={item} key={item.id} />
        })}
      </ul>
    </div>
  )
}
