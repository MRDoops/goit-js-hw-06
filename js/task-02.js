const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elementsRef = document.querySelector("#ingredients");

const ingredientRef = ingredients.map((option) => {
  const liRef = document.createElement("li");
  liRef.textContent = option;
  liRef.classList.add("item");
  return liRef;
});

elementsRef.append(...ingredientRef);
