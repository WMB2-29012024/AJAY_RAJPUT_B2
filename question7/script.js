const selectedTheme = document.getElementById("select");
const Theme = document.querySelector("body");
const paraElem=document.querySelector("#para")
// const Theme=document.querySelector("#container");

selectedTheme.addEventListener("change", (e) => {
  if (selectedTheme.value == "Dark") {
    Theme.style.backgroundColor = "black";
    paraElem.style.color="white";

  }
  else {
    Theme.style.backgroundColor = "white";
    paraElem.style.color="black";

  }
});
