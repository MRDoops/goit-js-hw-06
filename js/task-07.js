const inputSizeRef = document.getElementById("font-size-control");
const spanRef = document.getElementById("text");

const fontSizeControl = ({ currentTarget }) =>
  (spanRef.style.fontSize = `${currentTarget.value}px`);

inputSizeRef.addEventListener("input", fontSizeControl);

