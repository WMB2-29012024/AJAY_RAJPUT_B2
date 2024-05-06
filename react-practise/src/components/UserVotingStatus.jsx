const UserVotingStatus=({age})=>{
    return(
        <div>
            <h1>{age}</h1>
            {
                age>18?<h1>"You <span style={{color:"blue"}}>can</span> Vote Now"</h1>: <h1>Your age is below 18. You <span style={{color:"red"}}>can't</span> vote now.</h1>
            }
        </div>
    )
}


export  default UserVotingStatus