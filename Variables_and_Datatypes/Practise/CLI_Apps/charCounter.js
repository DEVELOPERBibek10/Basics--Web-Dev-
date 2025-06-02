let input = require("prompt-sync")();

let string = new String(input("Enter a string: "));

let counter = string.length;

console.log(`No. of character in the string ${string} = ${counter}`);
