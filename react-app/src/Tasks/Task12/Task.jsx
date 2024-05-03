import { useRef } from "react"

const Task=()=>{
    const countRef=useRef();
    const handleIncrease=()=>{
const currentNum=countRef.current.innerText;
countRef.current.innerText=Number(currentNum)+1
    }
    return(<div>
<h1 ref={countRef}>0</h1>
<button onClick={handleIncrease}>Increase</button>
    
    </div>
)
}
export default Task