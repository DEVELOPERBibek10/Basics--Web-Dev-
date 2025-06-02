let input = require("prompt-sync")();

let hours = parseInt(new Number(input("Enter hour : ")));
let minutes = parseInt(new Number(input("Enter minutes : ")));
let seconds = parseInt(new Number(input("Enter seconds : ")));

let totalSeconds = hours * Math.pow(60, 2) + minutes * 60 + seconds;

console.log(`Total Seconds = ${totalSeconds}`);
