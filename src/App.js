import React, {useState, useEffect} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from "./components/Header";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";

const LSKEY = "MyTodoApp";

function App() {

  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);

   // Update the state
   function addTodo(todo) {
    setTodos([...todos, { id: uuidv4(), name: todo, completed: false }]);
  }



  //Load our todos
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LSKEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

    // Save todos 
    useEffect(() => {
      window.localStorage.setItem(LSKEY, JSON.stringify(todos));
    }, [todos]);

//Toggle the todos
function toggleTodo(id) {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.isCompleted = !todo.isCompleted
  setTodos(newTodos)
}

    
  return (
  <>
    <Header />
    <Form addTodo={addTodo}/>
    <ToDoList todos={todos} toggleTodo={toggleTodo}/>
    <Footer />
  </>
  );
}

export default App;
