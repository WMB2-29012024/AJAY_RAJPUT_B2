const inputElem = document.getElementById("input-id1");
const ulElem = document.getElementById("ul-list");
// const liElem = document.getElementsByTagName("li");
// console.log(liElem);
// console.log(ulData);
const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Guava",
  "Watermelon",
  "Grapes",
  "Mango",
  "Papaya",
];
const renderFruitList = (Elems) => {
  for (let i = 0; i < fruits.length; i++) {
    const listElem = document.createElement("li");
    listElem.innerHTML = fruits[i];
    ulElem.appendChild(listElem);
    console.log(listElem);
  }
};

inputElem.addEventListener("keyup", (e) => {
  renderFruitList(fruits);
0
  // inputElem.setAttribute("value", e.target.value);
  // const filteredValue = e.target.value;
    // ulElem.map(ulElem.filter(listElem.includes(filteredValue))) {
    
//       console.log("dfds");
    // }
  }
);
