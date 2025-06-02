let input = require("prompt-sync")();

let celcius = parseFloat(input("Enter temperatue in Celcius : "));
let fahrenheit = (celcius * 9) / 5 + 32;
console.log(`Temperature = ${fahrenheit} degree F`);
