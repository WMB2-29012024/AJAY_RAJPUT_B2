
const Ref =({numm})=>{
const handleIncrease=()=>{
   numm(num=>num+1)
}

const handleDecrease=()=>{
    numm(num=>num-1)
}
    return(
        <div>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>

        </div>
    )
}


export default Ref 