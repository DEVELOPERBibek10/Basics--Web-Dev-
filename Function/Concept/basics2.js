// handelling undefined amount of arguments.

// Here, accumulation of  parameters in an array is rest ie. ...num1
function calculatePrice(first, second, ...num1) {
  return [first, second, ...num1]; // Unpackaging of the array is spread ie. ...num1
}

const reasult = calculatePrice(200, 300, 400, 500); // actual parameter also known as arguments.

// console.log(reasult);

// Function with array
function recieveArray(array) {
  const [one, two, three] = array;
  return two;
}

const arr = [100, 200, 300];
// console.log(two);

// Function with objects.

function recieveObj(anyObj) {
  const { name, age, qualification, post } = anyObj;
  return [name, age, qualification, post];
}

const obj = {
  name: "Bibek",
  age: 19,
  qualification: "BSc.IT",
  post: "full stack developer",
};

const recArr = recieveObj(obj);
console.log(recArr);

console.log(addOne(5)); // It is executed sucessfully.
function addOne(num) {
  // This function is hoisted on top of the call.
  return num + 1;
}

// console.log(addTwo(6)); // Gives error because of the concept of hoisting.
const addTwo = function (num) {
  return num + 2;
};
