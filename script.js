const inputelem = document.getElementById("input-id");
const formBtn = document.querySelector(".form");
const itemList = document.getElementById("element-list");

formBtn.addEventListener("submit", (event) => {
  event.preventDefault();
});
inputelem.addEventListener("change", (event) => {
    const data = document.createElement("li");
  inputelem.value = event.target.value;
  // console.log(inputelem.value);
  data.innerText = inputelem.value;
  console.log(data);
  itemList.appendChild(data);
  console.log(itemList);
  inputelem.value=""
});
