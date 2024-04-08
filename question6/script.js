const submitBtn = document.getElementById("submit");
const loaderElem = document.getElementById("loader");
const paraElem = document.getElementById("para");
const URL = "https://jsonplaceholder.typicode.com/todos";

submitBtn.addEventListener("click", (e) => {
  paraElem.innerText = "";

  loaderElem.style.display = "block";
  const getData = async (URL) => {
    const Response = await fetch(URL);
    const jsonData = await Response.json();
    loaderElem.style.display = "none";
    paraElem.innerText = " data is successfully fetched";
    return jsonData;
  };

  const getDataList = async () => {
    try {
      getData(URL);
      console.log(getData(URL));
    } catch {
      console.error("failed to fetch data");
    }
  };
  getDataList();
});
