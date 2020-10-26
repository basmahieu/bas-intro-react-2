import React,{ useRef } from 'react'

export default function Form({ addTodo }) {

    const inputRef = useRef();
  
    function clickHandler() {
    const inputValue = inputRef.current.value
    if ( inputValue === '') return
    addTodo(inputValue)
    //   console.log(name);
    //   inputRef.current.value = null
    }
  
      return (
          <>
        <div className="formcontainer">
          <label>
            <input className="form-control-lg" ref={inputRef}  type="text" />
          </label>
          <button className="btn-lg button" onClick={clickHandler}>Add todo</button>
        </div>
        </>
      )
  }

  