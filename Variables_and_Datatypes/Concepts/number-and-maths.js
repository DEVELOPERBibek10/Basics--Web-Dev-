const id = 70;
const adminId = new Number(90);
// console.log(id);
// console.log(adminId);

// console.log(adminId.toString().length);
// console.log(adminId.toFixed(3));

const decNum = 348.89;

// console.log(decNum.toPrecision(3));
/*
Note:
pass the parameter carefully like in the above example, decNum = 348.89.
if we pass 3 in the toPrecision function then the value is round of and the output is 349 but
if we pass 2 in the function then the output is 3.5e+2(exponential after 2nd place).
*/

let balance = 30000;

// console.log(balance.toLocaleString("en-IN"));

// ****************************Maths************************

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.7));
// console.log(Math.min(4, 5, 6, 7));
// console.log(Math.max(4, 5, 6, 7));

// console.log(Math.floor(Math.random() * 10) + 1);

const min = 2;
const max = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
