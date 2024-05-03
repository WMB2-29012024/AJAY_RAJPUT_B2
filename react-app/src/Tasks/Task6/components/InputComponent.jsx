const InputComponent=()=>{
    const handleChangeEvent=(e)=>{
            console.log(e.target.value)      
    }
return (
    <div className="Task">
<input  onChange={handleChangeEvent} type="text" placeholder="write here"></input>        

    </div>
)
}
export default InputComponent