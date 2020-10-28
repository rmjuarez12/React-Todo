import React from 'react'

export default function Todo(props) {
  return (
    <li className={props.todoItem.completed ? "completed" : "pending"}>
      <label htmlFor={props.todoItem.id}>
        <input type="checkbox" id={props.todoItem.id} onClick={() => props.toggleCompleted(props.todoItem.id)} /> {props.todoItem.task}
      </label>
    </li>
  )
}
