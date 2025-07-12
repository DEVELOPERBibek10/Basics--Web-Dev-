// const user = {
//   username: "Bibek",
//   loginCount: 3,
//   isSignedIn: true,
//   greeting: function () {
//     //In short this keyword represents the current executio context of the function or object
//     console.log(`Hello ${this.username}`);
//   },
// };

// console.log(user.username);
// user.greeting();

function greeting(username) {
  return `Helllo ${username}`;
}

function User(username, LoginCount, isSignedIn, greeting) {
  this.username = username; // Whenever the function is called using new keyword "this" keyword creates the usename property of the new object.
  this.LoginCount = LoginCount;
  this.isSignedIn = isSignedIn;
  this.greeting = greeting(this.username);
  return this;
}

const userOne = new User("Bibek", 3, true, greeting);
const userTwo = new User("Dipesh", 5, false, greeting);
console.log(userOne.constructor);
console.log(userOne instanceof User);
// console.log(userOne);
// console.log(userTwo);
