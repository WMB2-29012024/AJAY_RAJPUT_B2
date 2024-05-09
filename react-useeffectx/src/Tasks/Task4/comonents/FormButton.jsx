const Form=({setTodoData})=>{
    
const handleSubmit=async(e)=>{
    e.preventDefault()
const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.todoInput.value}`);
const data= await response.json();
 setTodoData (data)
}
    return(<div>
        <form onSubmit={handleSubmit}>
        <input id="todoInput" type="number" />
        <button type="submit">Get Todo</button>
        </form>

    </div>

    )
}


export default Form