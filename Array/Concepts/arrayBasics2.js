const Names = ["Bibek", "Dipesh", "Rabina", "Dipak"];
const lNames = ["Pyakurel", "Poudel", "Adhikari", "Dahal"];

// Names.push(lNames); // Pushes the whole array.
// console.log(Names);

// const fullNames = Names.concat(lNames); // Merges the two array. Creates the shallow copy.
// console.log(fullNames);

const fullNames = [...Names, ...lNames]; // Merges the two array. Creates the shallow copy.
// console.log(fullNames);

const nestArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]], [14, 15, 16]]; // Total depth = 2

const flatArray = nestArray.flat(Infinity); // Pass depth of the array in the argument

// console.log(flatArray);

// console.log(Array.isArray("bibek")); // Checks the argument is an array or not.
// console.log(Array.from("bibek")); // It can create array from array like objects (arguments, {length: 5})
// and iterable objects (like strings,sets,maps, etc)
// console.log(Array.from({ name: "bibek" })); // Intresting

const doubled = Array.from([1, 2, 3], (x) => x * 2);
// console.log(doubled); // [2, 4, 6]

// Create an array of length 5 using an array-like object
// The object { length: 5 } tells Array.from to make an array with 5 elements
// Each element is initially undefined

// The second argument is a map function: (_, i) => i
// _ = value (ignored, it's just undefined)
// i = index (we return this to fill the array with 0, 1, 2, 3, 4)

const arr = Array.from({ length: 5 }, (_, i) => i);
// console.log(arr); // Final result: [0, 1, 2, 3, 4]

const Arr = new Array(3); // Does not give expected reasult ie. [3] instead creates  [ <3 empty items> ].

// console.log(Arr);

const brr = Array.of(3); //Gives expected reasult ie. [3].
console.log(brr);
