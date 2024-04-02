const formBtn = document.getElementById("form");
const listElem1 = document.getElementById("input-id1");
const listElem2 = document.getElementById("input-id2");

formBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(`Fullname: ${listElem1.value}`);
  console.log(`Email: ${listElem2.value}`);
  listElem1.value = "";
  listElem2.value = "";
});
