const CardList=({userName})=>{
    return(
        <div className="div" style={{display:"flex", flexWrap:"wrap"}}>
        {userName.map((n,index)=>{
return(<div  key={index} className="users" style={{width:"250px",height:"300px",backgroundColor:"yellowgreen",margin:"5px",padding:"5px"}}>

    <h1>Name:{n}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi nobis quod dolorum aut nulla beatae placeat odio eligendi facilis.</p>
</div>
)
       
        })    }
        
        </div>
    )
}


export default CardList