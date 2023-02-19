// const inputRef = document.querySelector("#validation-input");

// inputRef.addEventListener("blur", onBlurBorderColor);

// function onBlurBorderColor() {
//   const inputDataLength = parseInt(inputRef.dataset.length, 10);
//   const inputValueLength = inputRef.value.length;

//   if (inputValueLength === inputDataLength) {
//     inputRef.classList.remove("invalid");
//     inputRef.classList.add("valid");
//   } else {
//     inputRef.classList.remove("valid");
//     inputRef.classList.add("invalid");
//   }
// }



const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onBlurBorderColor);

function onBlurBorderColor() {
  const inputDataLength = parseInt(inputRef.dataset.length, 10);
  const inputValueLength = inputRef.value.length;

  if (inputValueLength === inputDataLength) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
