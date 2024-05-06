import { useRef } from "react"

const Button=()=>{
    const countRef=useRef(0);
    const handleClick=()=>{
const number=countRef.current.innerText;
countRef.current.innerText=Number(number)+1;
    }
    return(
        <div>
            <button   onClick={handleClick}>Click me !<p ref={
                countRef}>0</p></button>
        </div>
    )
}


export default Button