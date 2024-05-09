import React, { useState } from "react";
import Form from "./comonents/FormButton";
import TodoData from "./comonents/TodoData";

const Task = () => {
  const [todoData, setTodoData] = useState({});

  return (
    <div>
      <h1>Todo Data:</h1>
      <Form setTodoData={setTodoData} />
      <TodoData todoData={todoData} />
    </div>
  );
};
export default Task;
