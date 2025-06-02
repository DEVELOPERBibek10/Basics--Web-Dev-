let input = require("prompt-sync")();

let base = parseFloat(input("Enter base of the triangle : "));
let height = parseFloat(input("Enter height of the triangle : "));

let area = (base * height) / 2;
console.log(`Area of triangle = ${area}`);
