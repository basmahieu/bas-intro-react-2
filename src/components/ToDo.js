import React from "react";


export default function ToDo( {todo, toggleTodo} ) {
  
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
        <li>
          <input type="checkbox" checked={todo.completed} id={todo.id} onChange={handleTodoClick}/> 
          {todo.name}
        </li>
  );
}