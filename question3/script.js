const submitBtn = document.getElementById("submit");
const URL="https://jsonplaceholder.typicode.com/todos"
submitBtn.addEventListener("click", (e) => {
  async function getData(URL) {
    const data = await fetch(URL);
    const jsonData = await data.json();
    return jsonData;
  }

  async function myData(URL) {
    const response = await getData(URL);
    console.log(response);
  }
  myData(URL);
});
