import { useState } from "react";

const Counter =()=>{
    let count=0;
    console.log(count);
    const [toggle , setToggle]=useState(0)
    const handleClick=()=>{
        count++
    
        console.log("inner",count); 
        setToggle(toggle+1);
    }
    const handleClick1=()=>{
        count--
        console.log("inner1",count);
        setToggle(toggle-1) 
    }
    console.log("outer",count);

    return(<div>

       <button onClick={handleClick
}>Increase</button>
{toggle}
       <button onClick={handleClick1}>decrease</button>

    </div>
    )
}


export default Counter 