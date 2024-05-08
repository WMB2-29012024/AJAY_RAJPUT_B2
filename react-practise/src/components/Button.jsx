import { useState } from "react"  
import Count from "./Count"

const Button=()=>{
    const [count,setCount]=useState(0)

const handleIncrese=()=>{
    setCount(count+1);
}
const handleDecrese=()=>{
    setCount(count-1)
}

  return(
    <div>
        <div >
<Count count={count}/>
        </div>
        <button onClick={handleIncrese}>+</button>
        <button  onClick={handleDecrese}>-</button>

    </div>
    )
}


export default Button