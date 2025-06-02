// Array declaration

let myArr = [1, 2, 3, 4, 5];

let myArr2 = new Array(1, 2, 3, 4);

// Array methods

myArr.push(6); // Adds the element at the last of the array. Changes the org array.

let poped = myArr.pop(); // Removes the last element of the array and returns. Changes the org array.

myArr.unshift(0); // Adds element in the first in the array.
myArr.shift();
console.log(myArr);
console.log(myArr.includes(0)); // Returns boolean value.
console.log(myArr.indexOf(6));
console.log(poped);
console.log("\norgArray : ", myArr, "\n");
let nArr = myArr.slice(0, 3); // Does not include the last index passed also does not change the actual array.
console.log("Sliced array : ", nArr);
console.log("After slicing : ", myArr);

let nArr2 = myArr.splice(0, 2); // Includes the last index passed and changes the actual array.
console.log("Spliced array", nArr2);
console.log("After splicing : ", myArr);
