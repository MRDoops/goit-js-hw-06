function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector(".change-color");
const textColorRef = document.querySelector(".color");
const body = document.body;

buttonRef.addEventListener("click", onChangeBodyColor);

function onChangeBodyColor() {
  textColorRef.textContent = body.style.backgroundColor = getRandomHexColor();
}

