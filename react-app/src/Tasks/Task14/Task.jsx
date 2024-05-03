import { useRef } from "react"

const Task=()=>{
const boxRef=useRef();
    const handleClick=()=>{
      if(      boxRef.current.style.display==="block"
      
    ){
      boxRef.current.style.display="none"
      boxRef.current.innerText="click here to show Box"
    }
    else{
      boxRef.current.style.display="block"
      boxRef.current.innerText="click here to Hide Box" 

    }
    }
    return(<div>
<button onClick={handleClick}>click here to Hide Box<div ref={boxRef} style={{width:"200px", height:'100px',  backgroundColor:'red'}}></div>
 </button>    </div>
)
}
export default Task