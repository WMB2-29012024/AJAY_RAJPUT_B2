const selectElem=document.querySelector("select");
const paraElem=document.querySelector("p");

selectElem.addEventListener("change", (e)=>{
  paraElem.innerText=  selectElem.value;
})