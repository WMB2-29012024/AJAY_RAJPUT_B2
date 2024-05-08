import { useState,useEffect } from "react"

const TaskCard=(props)=>{
    const [count,setCount]=useState(0);
    const [toggle,setToggle]=useState(false)
    const [toggleB,setToggleB]=useState(false)


    useEffect(()=>{
        setCount(count+10);
    },[toggle]);

    useEffect(()=>{
        setCount(count-10);
    },[toggleB]);

   const  handleIncrease=()=>{
setToggleB(!toggleB);
    }
    const handleDecrease=()=>{
        setToggle(!toggle);

    }
    return(
        <div>
            <button onClick={handleIncrease}>Increase</button>
            <div>{count}</div>
            <button onClick={handleDecrease}>Decrease</button>

        </div>
    )
}

export  default TaskCard