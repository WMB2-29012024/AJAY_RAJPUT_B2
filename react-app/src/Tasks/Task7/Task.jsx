import ButtonClick from "./components/ButtonClick";
const Task=()=>{
    const handlebuttonclick=()=>{
alert("button 1 clicked")
    }
    const handlebuttonclick2=()=>{
        alert("2nd button clicked")
    }
    return(
        <div>
<ButtonClick btnClick={handlebuttonclick} number={"1"}/>
<ButtonClick btnClick={handlebuttonclick2} number={"2"}/>

        </div>
    )
}


export default Task;