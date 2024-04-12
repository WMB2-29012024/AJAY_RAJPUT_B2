const selectElem = document.getElementById("select");

const paraElem = document.getElementById("para");

selectElem.addEventListener("change", (e) => {
  const userID = selectElem.value;
  console.log(userID);

  const URL1 = `https://jsonplaceholder.typicode.com/posts?userId=${userID}`;
  console.log(URL1);
  fetch(URL1)
    .then((data) => data.json())
    .then((data) => {
      return data[0]?.id;
    })
    .then((postID) =>
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`)
    )
    .then((PostData) => PostData.json())
    .then((PostData) => {
      console.log(PostData);
      for(let i=0; i<PostData.length;i++){
        let nameElem=PostData[i].name
  const comments = PostData[i].body.split("\n");
const nameElemDisplay = document.createElement("li");

        nameElemDisplay.innerText=`${i}${nameElem}`
        paraElem.appendChild(nameElemDisplay);
        // const commentsElemDisplay = document.createElement("li");
        for (const comment of comments) {
          const commentsElemDisplay = document.createElement("li");
          
          commentsElemDisplay.innerText = comment;
          paraElem.appendChild(commentsElemDisplay);
        }

      }
// for(data of PostData){

      
    })
    .catch((error) => {
      console.log(error);
    });
});








// .then((PostData) => {
//   console.log(PostData)
//   const comments = PostData[0].body.split("\n");
//   console.log(comments);
//   for (const comment of comments) {
//     const liElem = document.createElement("li");
//     liElem.innerText = comment;
//     paraElem.appendChild(liElem);
//   }
// })