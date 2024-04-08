const URL = "https://jsonplaceholder.typicode.com/todos";
const paraElem = document.getElementById("p");

async function getData(URL) {
  const data = await fetch(URL);
  const jsonData = await data.json();
  paraElem.innerText = " data is successfully fetched";
  return jsonData;
}
const getDataList=async()=>{
try {
  getData(URL);
  console.log(getData(URL));
} catch {
  console.error("failed to fetch data");
}
}
getDataList();