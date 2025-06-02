// WAP to concat two strings using template literals.

let input = require("prompt-sync")();

let firstName = input("Enter your First Name : ");
let lastName = input("Enter your last name : ");

let fullName = `Full Name = ${firstName.trim()} ${lastName.trim()}`;

console.log(fullName);
