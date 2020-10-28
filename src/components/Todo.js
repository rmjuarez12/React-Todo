import React from 'react'

export default function Todo(props) {
  return (
    <li>
      <label htmlFor={props.todoItem.id}>
        <input type="checkbox" id={props.todoItem.id} /> {props.todoItem.task}
      </label>
    </li>
  )
}
