let input = require("prompt-sync")();

let sentence = input("Enter a sentence : "); // Hello World

let slice = sentence.slice(6, 11); //World

console.log(`Sliced part = ${slice}`);
