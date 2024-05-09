import { useEffect } from "react"

const Task=()=>{
useEffect(()=>{
// const fetchData=async()=>{
// const response=await fetch("https://jsonplaceholder.typicode.com/todos");
// const data=await response.json();
// console.log(data);
// }
// fetchData()
fetch("https://jsonplaceholder.typicode.com/todos").then((response)=>response.json()).then((data)=>console.log(data))  //2
},[]
)
    return(
        <div>Hello WOrld</div>
    )
}

export default Task