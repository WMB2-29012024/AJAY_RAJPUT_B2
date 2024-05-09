import React, { useState } from 'react'

const Task = () => {
    const [todoData,setTodoData]=useState([]);
    console.log("1", todoData);

  const callTodo= async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/todos")
    const data=await response.json();  
    setTodoData(data)  
}
console.log("2", todoData);

  return (
    <div>
      <h1>Todo Data</h1>
<button onClick={callTodo}>Call Data</button>
    <ol>
      {
          
          todoData.map((todoData ,idx) =>{
          return <li key={idx} >{todoData.title}</li>}
        )
    }
    </ol>
    </div>
  )
}

export default Task
