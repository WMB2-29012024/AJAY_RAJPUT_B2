import Ref from "./components/Ref"
import Count from "./components/Count"
import { useState } from "react"

const Task=()=>{
    const[number,setNumber] =useState(0)
    return(<div>

        <Count numberr={number}/>
<Ref numm={setNumber}/>
    </div>
)
setNumber(number)
}
export default Task