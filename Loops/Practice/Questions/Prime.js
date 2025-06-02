let input = require("prompt-sync")();

let num = parseInt(input("Enter a number: "));
let flag = 0;
for (let i = 2; i <= num - 1; i++) {
  if (num % i === 0) {
    flag = 1;
    break;
  }
}
if (num === 1) console.log("1 is neither prime nor composite.");
else if (flag === 0) console.log(`${num} is a prime number.`);
else console.log(`${num} is not a prime number.`);
