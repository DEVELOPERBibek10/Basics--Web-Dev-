let input = require("prompt-sync")();

let noun = input("Enter noun : ");
let verb = input("Enter verb : ");
let adjective = input("Enter adjective : ");

let story = `The ${adjective} ${noun} loves to ${verb}!`;

console.log(story);
