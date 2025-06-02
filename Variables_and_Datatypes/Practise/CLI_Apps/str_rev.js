let input = require("prompt-sync")();

let string = new String(input("Enter a string : "));

let revStr = string.split("").reverse().join("");

console.log(`Reversed String = ${revStr}`);
