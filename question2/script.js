const URL = "https://jsonplaceholder.typicode.com/todos";
function getData(URL) {
  return new Promise((res, rej) => {
    fetch(URL)
      .then((data) => data.json())
      .then((jsonData) => res(jsonData));
  });
}
getData(URL).then(res=>console.log({res}));
