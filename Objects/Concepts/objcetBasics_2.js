const weChatUser = {};

weChatUser.name = "bibek";
weChatUser.email = "bbk@gmail.com";
weChatUser.isLoggedIn = false;

// console.log(weChatUser);

const regUser = {
  email: "dd@gmail.com",
  name: {
    firstName: "dipesh",
    lastName: "pyakurel",
  },
};

// console.log(regUser.name.firstName);

// Optional chaining

// console.log(regUser.name?.lastName); // Checks the existance of the key.

const obj1 = { 1: "bibek", 2: "dipesh" };
const obj2 = { 3: "dipak", 4: "rabina" };

// const obj3 = { obj1, obj2 };
/* '{}' is a target object that holds the copies of all the properties of obj1 and obj2 (source object) and is returned.*/
// const obj3 = Object.assign({}, obj1, obj2); // substitution of spread.
// console.log(obj3);
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    name: "bibek",
  },
  {
    id: 2,
    name: "dipesh",
  },
  {
    id: 3,
    name: "ronaldo",
  },
];

// console.log(users[1].name);
// console.log(weChatUser);

// console.log(Object.keys(weChatUser));
// console.log(Object.values(weChatUser));
// console.log(Object.entries(weChatUser));

// console.log(weChatUser.hasOwnProperty("isLoggedIn"));
