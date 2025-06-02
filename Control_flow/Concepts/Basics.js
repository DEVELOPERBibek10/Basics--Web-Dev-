// Very basic is done already.

// Basic Nested conditonals

// const balance = 1000;

// if (balance < 500) {
//   console.log("Less than 500");
// } else if (balance < 750) {
//   console.log("Less than 750");
// } else if (balance < 900) {
//   console.log("Less than 900");
// } else {
//   console.log("Less than 1200");
// }

// Switch conditions

// const month = 5;

// If break statement is absent then it will not check the further cases after the user given case is matched and executes the all the code
//  below it except default case.

// switch (month) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;

//   default:
//     console.log("Default case matched.");
//     break;
// }

// truthly

// const userEmail = "bibek@gmail.com";

// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("User email is not accessed");
// }

//truthy and falsy

// falsy

// false,0,-0,BigInt 0n, "",null, undefined, NaN

// Truthy

// "0", "false", " ", [], {}, function (){}

// const Arr = [1];
// if (Arr.length === 0) {
//   console.log("Array is empty.");
// } else {
//   console.log("Array is not empty.");
// }

// const Obj = {};

// if (Object.keys(Obj).length === 0) {
//   console.log("The object is empty.");
// } else {
//   console.log("The object is not empty.");
// }

// Nullish Coalescing operator (??): null or undefined.

let val1 = null ?? 10; // if there are two values or responses and one of them is null or undefined then the value which is not null or
// undefined that value or response is assigned.

// console.log(val1);

// Ternary operator

// Syntax: condition ? true : false;

const teaPrice = 100;

teaPrice >= 80
  ? console.log("Greater than or equals to 80")
  : console.log("Less than 80");
