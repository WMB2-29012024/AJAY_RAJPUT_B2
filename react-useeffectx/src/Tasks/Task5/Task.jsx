import { useState } from "react"
import TodoData from "../Task5/comonents/TodoData"
import Form from "../Task5/comonents/FormButton"

const Task =()=> {
  const[todoData,setTodoData]=useState("")
  return(
    <div>
      <Form setTodoData={setTodoData}/>
      <TodoData todoData={todoData} />
    </div>
  )
}


export default Task