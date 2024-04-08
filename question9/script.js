const submitBtn = document.getElementById("submit");
const submitBtnText = document.getElementById("submit-text");
const prevBtn = document.getElementById("prev-submit");
const nextBtn = document.getElementById("next-submit");
let count = 1;
const loaderElem = document.getElementById("loader");
const paraElem = document.getElementById("para");
const ulList = document.getElementById("ulList");

const nextElem = document.createElement("li");
const prevElem = document.createElement("li");
const currentElem = document.createElement("li");

const getData = async (count) => {
  const URL = `https://jsonplaceholder.typicode.com/todos/${count}`;
  const Response = await fetch(URL);
  const jsonData = await Response.json();
  currentElem.innerText = `${count}${jsonData.title}`;
  ulList.appendChild(currentElem);

  return jsonData;
};

const getDataList = async () => {
  try {
    const endData = await getData(count);
  } catch {
    console.error("failed to fetch data");
  }
};
getDataList();

nextBtn.addEventListener("click", (event) => {
  count = count + 1;
  getDataList(count);
});
prevBtn.addEventListener("click", (event) => {
  if (count > 1) {
    count = count - 1;

    getDataList(count);
  }
});
