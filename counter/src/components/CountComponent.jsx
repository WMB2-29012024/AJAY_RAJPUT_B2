import React from "react";

const CountComponent=({countNumber})=>{
    console.log(countNumber);
    return(
        <div><h1>{countNumber}</h1></div>
    )
};
export default CountComponent;