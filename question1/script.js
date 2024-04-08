const URL = "https://jsonplaceholder.typicode.com/todos";
async function getData(URL) {
  const data = await fetch(URL);
  const JSONdata = await data.json();
  console.log(JSONdata);
  return JSONdata;
}

getData(URL);
