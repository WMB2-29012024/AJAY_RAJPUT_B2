
const paraElem = document.querySelector("p");
const formBtn = document.querySelector("form");

formBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedGender = document.querySelector('input[name="gender"]:checked');
  if (selectedGender) {
    paraElem.innerText =  selectedGender.value;
  } else {
    paraElem.innerText = "Please select a gender.";
  }
});
