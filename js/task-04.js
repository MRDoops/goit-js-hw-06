
// // отримання посилань на кнопки та на span елемент, який відображає значення лічильника
// const decrementButton = document.querySelector('[data-action="decrement"]');
// const incrementButton = document.querySelector('[data-action="increment"]');
// const counterSpan = document.querySelector('#value');

// let counterValue = 0;

// // додавання слухачів кліків до кнопок
// decrementButton.addEventListener('click', () => {
// 	counterValue--;
// 	counterSpan.textContent = counterValue;
// });

// incrementButton.addEventListener('click', () => {
// 	counterValue++;
// 	counterSpan.textContent = counterValue;
// });

let counterValue = 0;

 // отримання посилань на кнопки та на span елемент, який відображає значення лічильника
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementtBtnRef = document.querySelector('[data-action="increment"]');
const counterSpanRef = document.querySelector("#value");

 // додавання слухачів кліків до кнопок
decrementBtnRef.addEventListener("click", onAddDecrementBtn);
incrementtBtnRef.addEventListener("click", onAddincrementBtn);

function onAddDecrementBtn() {
  counterValue--;
  counterSpanRef.textContent = counterValue;
}

function onAddincrementBtn() {
  counterValue++;
  counterSpanRef.textContent = counterValue;
}
