"use strict";

const coding = ["PHP", "JS", "C", "C++", "Python", "Java"];

//forEach returns nothing it is helpful only while performing operations.
// const something = coding.forEach(function (item) {
//   console.log(item);
//   return item;
// });

// console.log(something);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter checks the condition and returns a value.
// const grt5 = myNums.filter(function (num) {
//   return num > 5;
// });

// console.log(grt5);

// const grt5 = [];
// Same thing as filter function by using forEach.
// myNums.forEach(function (num) {
//   if (num > 5) grt5.push(num);
// });

// console.log(grt5);

const books = [
  {
    name: "To Kill a Mockingbird",
    genre: "Fiction",
    author: "Harper Lee",
    publishedYear: 1960,
  },
  {
    name: "1984",
    genre: "Dystopian",
    author: "George Orwell",
    publishedYear: 1949,
  },
  {
    name: "The Great Gatsby",
    genre: "Classic",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
  },
  {
    name: "The Hobbit",
    genre: "Fantasy",
    author: "J.R.R. Tolkien",
    publishedYear: 1937,
  },
  {
    name: "Pride and Prejudice",
    genre: "Romance",
    author: "Jane Austen",
    publishedYear: 1813,
  },
  {
    name: "The Catcher in the Rye",
    genre: "Fiction",
    author: "J.D. Salinger",
    publishedYear: 1951,
  },
  {
    name: "The Da Vinci Code",
    genre: "Thriller",
    author: "Dan Brown",
    publishedYear: 2003,
  },
  {
    name: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    author: "J.K. Rowling",
    publishedYear: 1997,
  },
  {
    name: "The Alchemist",
    genre: "Adventure",
    author: "Paulo Coelho",
    publishedYear: 1988,
  },
  {
    name: "The Lord of the Rings",
    genre: "Fantasy",
    author: "J.R.R. Tolkien",
    publishedYear: 1954,
  },
];

let userBooks = books.filter(function (book) {
  return book.genre === "Fiction";
});

userBooks = books.filter(function (book) {
  return book.publishedYear >= 1950 && book.genre === "Fantasy";
});

// console.log(userBooks);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// map helps in performing different kind of operations in a existing and returns the operated array.Other examples: (used to generate cards or dom elements dynamically.)
// const smth = myNum.map(function (num) {
//   return num * 10;
// });

// console.log(smth);

// Method chaining.
const smth2 = myNum
  .map(function (num) {
    return num * 10;
  })
  .filter(function (num) {
    return num >= 40;
  });

// console.log(smth2);

/* reduce method

Basic syntax : arr.reduce(callback function, initialValue)
Detailed syntax: arr.reduce(function (accumulator, currentValue){}, initialValue)

*/

// const myNums2 = [1, 2, 3, 4];
// const initialValue = 0;
// const myTotal = myNums2.reduce(function (accumulator, currentValue) {
//   console.log(`accumulator : ${accumulator}, Current value : ${currentValue}`);
//   return accumulator + currentValue;
// }, initialValue);

// console.log(`\nTotal = ${myTotal}\n`);

const shoppingCart = [
  {
    name: "Wireless Mouse",
    price: 25.99,
  },
  {
    name: "Bluetooth Headphones",
    price: 59.99,
  },
  {
    name: "Laptop Stand",
    price: 32.5,
  },
  {
    name: "USB-C Charger",
    price: 19.99,
  },
  {
    name: "Notebook",
    price: 4.75,
  },
];

const Total = shoppingCart.reduce(function (acc, item) {
  return acc + item.price;
}, 0);

console.log(Total);
