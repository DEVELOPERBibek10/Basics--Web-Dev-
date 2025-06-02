const Name = "Bibek Pyakurel";
const counter = 55;

// String interpollation
// console.log(`Name = ${Name} and counter = ${counter} `);

// 2nd method of string declaration (through object)

const name = new String("Bibek");

// console.log(name[0]);

// console.log(name.length);
// console.log(name.charAt(3));
// console.log(name.indexOf("b"));
// console.log(name.toUpperCase());

const newString = Name.substring(6, 10); // last value ie. 10 is not included and does not support negetive value. if given then starts
// with 0 index.
// console.log(newString);

const anotherString = Name.slice(0, 5); // Can be started from negetive index. starts from reverse order.

const newStr = "   Bibek  ";
// console.log(newStr.trim());

const url = "https://bibek.com/bibek%20kumar";

// console.log(url.replace("%20", "-"));

// console.log(url.includes("bibek"));

const split_url = url.split("/");
/* In a string function known as split, we have to pass seprator and the limit where limit can be undefined.
It creates the array from the letter which is splited. If parameter is empty then it creates array of the whole string.
*/

console.log(split_url);
