import React, { useEffect, useState } from 'react'

const Task = () => {
    const [todoData,setTodoData]=useState([]);
    console.log("1", todoData);
    useEffect(()=>{
(async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/todos")
    const data=await response.json();
    setTodoData(data)
})()    },[])
console.log("2", todoData);

  return (
    <div>

    <ol>
      {
          
          todoData.map((list) =>{
          return <li>{list.title}</li>}
        )
    }
    </ol>
    </div>
  )
}

export default Task
