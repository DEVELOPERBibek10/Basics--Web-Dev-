const parent = document.querySelector(".parent");

const dayOne = document.querySelector(".children");

console.log(dayOne.parentElement); // Returns only if the parent is an element (HTML tag). If not, returns null.
console.log(dayOne.parentNode); // Returns any type of parent node, like an element, document, or text.
console.log(dayOne.nextElementSibling); // Returns only if the next sibling is an element (HTML tag). If not, returns null.
console.log(dayOne.nextSibling); // Returns any type of next sibling node, like an element, document, or text.
// console.log(parent);
// console.log(parent.children);

const children = [...parent.children];

// children.forEach(function (child) {
//   console.log(child.innerText);
// });

// children[0].style.backgroundColor = "maroon";

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);
