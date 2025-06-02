// Array and Object specific loops.

// # for of loop

const arr = [1, 2, 3, 4, 5];
// for (const i of arr) {
//   console.log(`value ${i}`);
// }

// const greetings = "Hello world!";
// for (const greet of greetings) {
//   console.log(greet);
// }

// Maps

const map = new Map();
map.set("IN", "India");
map.set("NEP", "Nepal");
map.set("FR", "France");

// for (const [key, value] of map) {
//   console.log(key, value);
// }

const myObj = {
  name: "Bibek",
  age: 19,
  Gender: "Male",
};

// for (const { key, value } of myObj) { //Not directly applicable in Objects
//   console.log(`{
//         ${key} : ${value},
//         };`);
// }

// console.log(Object.entries(myObj));

// for (const [key, value] of Object.entries(myObj)) {
//   console.log(`${key} : ${value},`);
// }

// # for in loop

// for (const key in myObj) {
//   console.log(`${key} : ${myObj[key]}`);
// }

// for (const key in arr) {
//   console.log(`${key}:${arr[key]}`); // If only passed key then it will print the index because arr is also a object in JS and it's keys are index.
// }

const myMap = new Map([
  ["name", "Bibek"],
  ["age", 18],
]);

// Convert Map to plain object
const objFromMap = Object.fromEntries(myMap);

// Now use for...in
for (let key in objFromMap) {
  // console.log(`${key}: ${objFromMap[key]}`);
}

//forEach loop

// arr.forEach(function (item) { // Only passing values ("item") doesn't modify the original array.
//   console.log(item);
// });

arr.forEach(function (item, index, arr) {
  // Passing and using values ("item"),index and the array can modify the original array according to the operation performed in the org array.
  arr[index] = item * 2;
});

// console.log(arr);

const myCode = [
  {
    languageName: "JavaScript",
    fileExtention: ".js",
  },
  {
    languageName: "Python",
    fileExtention: ".py",
  },
  {
    languageName: "Kotlin",
    fileExtention: ".k",
  },
];

myCode.forEach(function (item) {
  console.log(item.languageName);
});
