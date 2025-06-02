let input = require("prompt-sync")();

let firstTerm = parseInt(input("Enter the first term: "));
let commonRatio = parseInt(input("Enter the common ratio: "));
let nthTerms = parseInt(input("Enter the no.of terms: "));

// First appraoch (Maths approach)
for (let i = 1; i <= nthTerms; i++) {
  let GP = firstTerm * Math.pow(commonRatio, i - 1);
  console.log(GP);
}

// Second approach (Without Maths)
// console.log(firstTerm);
// for (let i = firstTerm; i <= nthTerms; i++) {
//   let GP = i * commonRatio;
//   console.log(GP);
// }
