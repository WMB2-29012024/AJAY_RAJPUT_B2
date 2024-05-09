const TodoData=({todoData})=>{
return(
  <div>
  {
    todoData.title?(
    <>
  <p> id: { todoData.id}</p>
  <p> id: {todoData.title}</p>
  <p> id: {String(todoData.completed)}</p>
</>
  ):
  <p>
No Data Found
  </p>
}

  </div>
)
}
export default TodoData