// document.querySelector("#two").onclick = function () {
//   alert("Clicked Dipesh"); // Slightly better approach but not the best.
// };

// document.querySelector("#three").addEventListener(
//   "click",
//   function () {
//     // Best approach cause it is more optimized, flexible annd provides more functionality.
//     alert("Basanta Clicked");
//   },
//   false
// );

//Event Capturing(Event propoagation from parent to child again returns form chid to parent) and Event bubbling(Event propogation from child to parent.)

// document.querySelector(".container").addEventListener(
//   "click",
//   function () {
//     console.log("Clicked inside container");
//   },
//   true
// );

// document.querySelector("#three").addEventListener(
//   "click",
//   function () {
//     console.log("Basanta Clicked");
//   },
//   true
// );

document
  .querySelector(".container")
  .addEventListener("click", function (event) {
    // console.log(event.target);
    // event.target.parentNode.remove();// If clicked in li entire ul is gone.
    // to prevent the above.
    if (event.target.className === "click") {
      event.target.parentNode.remove();
    }
  });
