// Function defination.

// function add(num1, num2) {
//   console.log(num1 + num2);
// }
// const reasult = add(6, 6); // Not retured anything just logged the value in console so, reasult = undefined. But 12 is also printed in the
// console because function is called and function contains log function.

function add(num1, num2) {
  //   const reasult = num1 + num2;
  //   return reasult;
  return num1 + num2;
}

const reasult = add(5, 5);

// console.log("reasult: ", reasult);

// username = "Bibek" (It ensures that the username is never empty or undefined.)
function loggedInUserMsg(username = "Bibek") {
  if (!username) {
    // Note: The expression !username checks if the username is falsy.
    // Falsy values include: undefined, null, empty string (""), 0, NaN, and false.
    // So if username is not provided or is empty, the condition becomes true.
    return "Please enter a username.";
  }
  return `${username} just logged in.`;
}

// console.log(loggedInUserMsg("Bibek"));
const msg = loggedInUserMsg(); // If not passed anything then undefined is passed. "" is a falsy value.

console.log(msg);
