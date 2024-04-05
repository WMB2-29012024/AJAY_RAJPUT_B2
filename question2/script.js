const inputElem1 = document.querySelector("#input-id1");
const inputElem2 = document.querySelector("#input-id2");
const buttonElem = document.querySelector("#button");
const formBtn = document.querySelector("form");
console.log(formBtn);
const paraElem = document.querySelector("p");
formBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(formBtn);
  const sum = Number(inputElem1.value) + Number(inputElem2.value);
  paraElem.innerText = sum;
});
