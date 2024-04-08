const submitBtn = document.getElementById("submit");
const submitBtnText = document.getElementById("submit-text");

const loaderElem = document.getElementById("loader");
const paraElem = document.getElementById("para");
const ulList = document.getElementById("ulList");
const URL = "https://jsonplaceholder.typicode.com/todos";

submitBtn.addEventListener("click", (e) => {
  paraElem.innerText = "";
submitBtn.style.justifyContent="space-evenly"
  loaderElem.style.display = "inline";
  const getData = async (URL) => {
    const Response = await fetch(URL);
    const jsonData = await Response.json();
    loaderElem.style.display = "none";
    submitBtnText.innerText="Get Data again"
    paraElem.innerText = `Data Fetch, Total results: ${jsonData.length}`;
    for (let i = 0; i < jsonData.length; i++) {
      const liElem = document.createElement("li");
      liElem.innerText = `${i} ${jsonData[i].title}`;
      ulList.appendChild(liElem);
    }

    return jsonData;
  };

  const getDataList = async () => {
    try {
      const endData = await getData(URL);
    } catch {
      console.error("failed to fetch data");
    }
  };
  getDataList();
});
