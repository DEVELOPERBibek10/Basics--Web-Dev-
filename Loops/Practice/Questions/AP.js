let input = require("prompt-sync")();

let firstTerm = parseInt(input("Enter the first term: "));
let commonDiff = parseInt(input("Enter the common difference: "));
let nthTerm = parseInt(input("Enter the no. of terms: "));

// Good approach
for (let i = 1; i <= nthTerm; i++) {
  let AP = firstTerm + (i - 1) * commonDiff;
  if (AP < 0) {
    // Note: If, common Difference negetive then the AP can also become negetive.
    break;
  }
  console.log(AP);
}

// Alternate approach (Only applicable when common difference is positive).
// for (
//   let i = firstTerm;
//   i <= firstTerm + (nthTerm - 1) * commonDiff;
//   i = i + commonDiff
// ) {
//   console.log(i);
// }
