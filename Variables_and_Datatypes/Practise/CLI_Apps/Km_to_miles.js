let input = require("prompt-sync")();

let KM = parseFloat(new Number(input("Enter distance in KM : ")));

let miles = KM * 0.621371;

console.log(`${KM} km = ${miles.toFixed(2)} miles`);
