"use strict";

// # Object creation

//Singleton object.
// Object.create();

// Objcet literal

// Creating a unique Symbol to use as a key
const userId = Symbol("id");

// Creating an object user.
const user = {
  name: "Bibek",
  "full name": "Bibek Pyakurel",
  age: 19,
  location: "Kathmandu",
  email: "bibek@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
};

// Using the Symbol as a key to store a value.
user[userId] = "key1";

/*
📝 Notes:
- Symbol('id') creates a unique and hidden identifier.
- The variable `userId` holds that unique Symbol.
- We use it like a secret unique ID to store data in the object.
- The object now looks like: { [Symbol('id')]: "key1" }
- Symbol keys don't show up with Object.keys() or in normal loops.
- Use Object.getOwnPropertySymbols(user) to see symbol keys.
*/

// console.log(user.email);
// console.log(user["full name"]); // another way to access the value inside of the object.
// console.log(user["email"]);
// console.log(user[userId]);
// console.log(user);

user.email = "bibek@google.com";
// Object.freeze(user); // Cannot change or add any property of the object.
// user.email = "bibek@openai.com";
// console.log(user);

// user.greetings = function () {
//   console.log("Hello user");
// };
// user.greetings();

user.greetings = function () {
  console.log(`Hello user, ${this.name}`); // Here, 'this' is the reference of the object.
};

console.log(user.hasOwnProperty("greetings"));
user.greetings();
