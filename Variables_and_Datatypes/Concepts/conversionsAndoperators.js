"use strict";

let score = "78ab";

console.log(typeof score); // output: string

let toNumberCoversion = Number(score); // Explicitly converting score into a number.
console.log(toNumberCoversion); // output : NaN (Not a Number). Note: be careful during conversion.
console.log(typeof toNumberCoversion); // output : number. But to be accurate it is not a valid output.

let score_1 = null;

let toNumberCoversion_1 = Number(score_1);
console.log(toNumberCoversion_1); // output : 0
console.log(typeof toNumberCoversion_1); // output: number.

let score_2 = undefined;

let toNumberCoversion_2 = Number(score_2);
console.log(toNumberCoversion_2); // output : NaN
console.log(typeof toNumberCoversion_2); // output: number. Again, not a valid output.

let score_3 = NaN;
console.log(typeof score_3); // output: number.

let toNumberCoversion_3 = Number(score_3);
console.log(toNumberCoversion_3); // output : NaN
console.log(typeof toNumberCoversion_3); // output: number.

/*

# Boolean conversion

1 = true,
"" = false,
"bibek" = true and so on.

*/

// **********************************************************Operations*******************************************************************

// Tricky Operations

console.log("1" + "2"); // output : 12 (string concatination)
console.log(5 + "3"); // output : 53 (Due to left to right operation(Generic) in JS)
console.log("5" + 23 + 34); // output : 52334 "
console.log(2 + 3 + "78"); // output : 578 "

console.log(+true); // output: 1
console.log(+""); // output : 0

let pre = 5;
console.log(`pre-increment = ${++pre}\npost-increment = ${pre++}`); //Output : 6 No difference.

let num = 6;
// let prf = ++num;
let pof = num++;

console.log(num);
/* Output: 7 
   (num is incremented regardless; the only difference is in how the value is stored in the variable)
*/

/*
console.log(prf); 
Output: 7 
(With ++num, the value of num is incremented first, then returned or stored in prf.)
*/

console.log(pof);
/*
 Output: 6 
 (With num++, the current value of num is first returned or stored in pof, then num is incremented.)
*/
