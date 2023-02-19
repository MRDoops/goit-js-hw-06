const inputRef = document.querySelector("#name-input");
const nameLabelRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange(e) {
  // console.log(e.currentTarget.value);
  if (inputRef.value) {
    nameLabelRef.textContent = inputRef.value;
  } else {
    nameLabelRef.textContent = "Anonymous";
  }
}
