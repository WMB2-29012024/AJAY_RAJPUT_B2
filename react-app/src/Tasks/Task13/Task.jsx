import { useRef } from "react"

const Task=()=>{
    const inputRef=useRef();
    const handleChange=()=>{
      console.log(inputRef.current.value );
    }
    return(<div>
<input ref={inputRef} onChange={handleChange} type="text" name="name" id="name"></input>
    </div>
)
}
export default Task