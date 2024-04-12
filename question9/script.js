const titleSearchInputElem = document.getElementById("searchInput");

const paraElem = document.getElementById("postsContainer");

const URL = "https://jsonplaceholder.typicode.com/posts";
let arrayData = [];

async function fetchPosts() {
  const data = await fetch(URL);
  const jsonData = await data.json();
  arrayData = jsonData;
  console.log(arrayData);

  calledData(arrayData);
}
function calledData(arrayData) {
  paraElem.innerHTML=""
  for (const arr of arrayData) {
    const clutter = `
        <li>
          <b>Title:</b><p>${arr.title}</p>
          <b>Body:</b><p>${arr.body}</p>
        </li>
      `;
    paraElem.innerHTML += clutter;
  }
  console.log(paraElem);
  // for (let i = 0; i < arrayData.length; i++) {
  //   // const titleElem = document.createElement("h1");
  //   const bodyElem = document.createElement("p");
  //   // titleElem.innerText = jsonData[i].title;
  //   bodyElem.innerText = `Body: ${arrayData[i].body}`;
  //   const liElem = document.createElement("li");
  //   liElem.innerText = `Title: ${arrayData[i].title}`;
  //   // liElem.appendChild(titleElem);
  //   paraElem.appendChild(liElem);
  //   liElem.appendChild(bodyElem);
  // }
}
fetchPosts();

titleSearchInputElem.addEventListener("input", (e) => {
  const inputValue = e.target.value;
  searchData(inputValue,key)
});

  function searchData(inputValue, key){
    const fliteredData = arrayData.filter((postObj) =>
      postObj[key].toLowerCase().includes(searchValue.toLowerCase())
    );
    calledData(fliteredData);
  }
