const fileElem = document.querySelector("#input-id");
const olElem = document.querySelector("#ol-list");
const submitElem = document.querySelector("#submit");

submitElem.addEventListener("click", (e) => {
    // console.log("as");
  const FilesList = fileElem.files;
// console.log(FilesList);
  for (const File of FilesList) {
    const fileData = ` <p>name: ${File.name}</p>
      <p>size:${` ${(Number(File.size) / 1024).toFixed(2)} KB`}</p>
      <p>type: ${File.type}</p>`;
    const listelem = document.createElement("li");
    listelem.innerHTML += fileData;
    olElem.appendChild(listelem);
  }
//   console.log(olElem);
});
