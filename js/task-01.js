const countRef = document.querySelectorAll(".item").length;
console.log("Number of categories: ", countRef);

const itemsRef = document.querySelectorAll(".item");
Array.prototype.forEach.call(itemsRef, (element) => {
  const title = element.querySelector("h2").innerHTML;
  console.log(`Category: ${title}`);
  const itemsLength = element.querySelectorAll("li").length;
  console.log(`Elements: ${itemsLength}`);
});
