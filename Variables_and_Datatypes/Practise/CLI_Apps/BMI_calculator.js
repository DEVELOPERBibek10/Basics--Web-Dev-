let input = require("prompt-sync")();

let weight = parseFloat(new Number(input("Enter your weight in Kg : ")));
let height = parseFloat(new Number(input("Enter your height in meter : ")));

let BMI = weight / Math.pow(height, 2);

console.log(`Your BMI = ${BMI}`);
