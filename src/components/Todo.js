// Import Dependencies
import React, { useEffect } from 'react';
import { gsap } from "gsap";

export default function Todo(props) {
  useEffect(() => {
    gsap.from(`#task-${props.todoItem.id}`, {height: 0, opacity: 0, duration: 0.5});
    gsap.from(`#task-${props.todoItem.id} label`, {x:-200, duration: 0.5});
  },[props.todoItem.id])

  return (
    <li id={`task-${props.todoItem.id}`} className={props.todoItem.completed ? "completed" : "pending"}>
      <label htmlFor={props.todoItem.id}>
        <input type="checkbox" id={props.todoItem.id} onClick={() => props.toggleCompleted(props.todoItem.id)} /> {props.todoItem.task}
      </label>
    </li>
  )
}
