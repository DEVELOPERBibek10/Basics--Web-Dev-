let input = require("prompt-sync")();

let length = parseFloat(new Number(input("Enter length of rectangle : ")));
let width = parseFloat(new Number(input("Enter width of rectangle : ")));

let perimeter = 2 * (length + width);
let area = length * width;

console.log(`Area of reactangle = ${area}`);
console.log(`Perimeter of rectangle = ${perimeter}`);
