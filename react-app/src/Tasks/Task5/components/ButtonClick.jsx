
const ButtonClick=()=>{
    const handleClick=()=>{
        alert("Button Clicked")

    }
    const handleRightClick =()=>{
        alert("right button clicked")
    }
return (
    <div className="button-click">

        
<button onContextMenu={handleRightClick} onClick={handleClick}>OnClick!</button>

    </div>
)
}
export default ButtonClick