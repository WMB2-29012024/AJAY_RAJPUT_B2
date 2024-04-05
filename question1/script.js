const inputElem= document.querySelector("#input-id");
const paraElem= document.querySelector("p");
inputElem.addEventListener("keyup",(e)=>{
    paraElem.innerText=inputElem.value;
})