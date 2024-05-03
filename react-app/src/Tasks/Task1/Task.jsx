import CardCompound from "./components/CardCompound"
import "./Task.css"
const Task=()=>{
    const componentArray=[1,2,3,4,5,6]
return (
    <div className="Task">
        {
componentArray.map((card)=>{
    return <CardCompound key={card} title={card}/>
})
        }
        


    </div>
)
}
export default Task