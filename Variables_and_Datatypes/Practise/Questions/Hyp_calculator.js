let input = require("prompt-sync")();

let p = parseFloat(new Number(input("Enter the perpendicular height : ")));
let b = parseFloat(new Number(input("Enter the base : ")));

let h = Math.sqrt(Math.pow(p, 2) + Math.pow(b, 2));

console.log(`Hypotenuse = ${h.toFixed(2)}`);
