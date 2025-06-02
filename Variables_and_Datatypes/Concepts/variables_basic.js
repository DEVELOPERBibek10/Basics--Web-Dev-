"use strict"; // Treat all the JS code as newer version.

// Prefer Camel case while declaring or initialization of the variable.

const bibek = 124; // cannot be changed anywhere in program.
let dipesh = 456;
var basanta = 45;
unish = 78;

/*
Prefer not to use "var" because of issue in block scope and functional scope.
*/

// Investigation

// bibek = 78;
dipesh = 45;
basanta = 77;
unish = 67;

console.table([bibek, dipesh, basanta, unish]);
