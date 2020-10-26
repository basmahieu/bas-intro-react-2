import React from "react";
import ToDo from './ToDo';


export default function ToDoList({todos, toggleTodo}) {

  return (
    <div className="d-flex justify-content-center">
        <div className="container">
            <ul>
                {todos.map(todo => {
                    return <ToDo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
                })} 
            </ul>
        </div>
      </div>
  );
}
