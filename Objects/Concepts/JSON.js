"use strict";

const API = require("./Data.js");

const course = {
  courseName: "JS in Hindi",
  price: "999",
  instructor: "Hitesh",
};

const { instructor } = course;

// console.log(instructor);

//JSON
// {
//     "name": "Bibek",
//     "age": 19,
//     "gender": "male"
// }

console.log(API.results[0].location);
