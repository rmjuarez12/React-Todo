// Import Dependencies
import React from 'react';

export default function TodoForm() {
  return (
    <div>
      <form>
        <input type="text" name="name" placeholder="Add Todo Item..." />

        <input type="submit" value="Add Todo" />
      </form>

      <button>Clear Completed</button>
    </div>
  )
}
