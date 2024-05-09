
const TodoData = ({todoData}) => {
  return(
    <div>
      {todoData.title ? (<>
      <p>ID:{todoData.id}</p>
      <p>Title:{todoData.title}</p>
      <p>Status:{String(todoData.completed)}</p>

      </>):(<p>No Data Found</p>)
      }
    </div>
  )
}

export default TodoData
