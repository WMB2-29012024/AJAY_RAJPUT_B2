import { useEffect, useState } from "react";

const TaskCard=()=>{
const [count,setCount]=useState(0);
const [toggle,setToggle]=useState(false)

useEffect(()=>{
    console.log("bina array k",  {count});
})
useEffect(()=>{
    console.log("empty array",{count});
},[])
useEffect(()=>{
    console.log('runs when "count" changes', {count});
},[count])
useEffect(()=>{
    console.log('runs when "toggle" changes',{toggle});
},[toggle]);

console.log({count});
return(
    <div>
<button onClick={()=>setCount(count+1)}>+</button>
<button onClick={()=>setCount(count-1)}>-</button>
<button onClick={()=>setToggle(!toggle)}>Toggle</button>


    </div>
)
}
export default TaskCard