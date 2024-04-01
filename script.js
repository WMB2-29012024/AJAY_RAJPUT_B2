const inputelem = document.getElementById("input-id");
const data = document.createElement("p");
const formBtn = document.querySelector(".form");

formBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  data.value=e.target.value  ;
  console.log(e);
  inputelem.value = "";
});
