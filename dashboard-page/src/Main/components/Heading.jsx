import "./style/Heading.css"

const Heading=({size,text})=>{
return(

    <p className={size}>{text}</p>
)
}

export default Heading