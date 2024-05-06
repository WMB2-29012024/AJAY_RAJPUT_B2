import { useState } from "react";
const Button=()=>{
    const [count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(count+1);
    }
    return(
        <button onClick={handleClick}>Click me-<p style={{color:"red"}}>{count}</p></button>
    )
}
export default Button