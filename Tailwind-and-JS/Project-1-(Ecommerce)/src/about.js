const themeBtn = document.querySelector("#theme");
let themeStored = localStorage.getItem("theme");
const menuBar = document.querySelector("#menu");
const close = document.querySelector("#close");
const navDialog = document.querySelector("#navDialog");
const aboutBody = document.querySelector("body");

if (themeStored === "dark") {
  themeBtn.querySelector(".ri-sun-fill").classList.remove("hidden");
  themeBtn.querySelector(".ri-moon-fill").classList.add("hidden");
  aboutBody.classList.add("dark");
} else {
  themeBtn.querySelector(".ri-sun-fill").classList.add("hidden");
  themeBtn.querySelector(".ri-moon-fill").classList.remove("hidden");
  aboutBody.classList.remove("dark");
}

menuBar.addEventListener("click", function () {
  navDialog.classList.remove("hidden");
});
close.addEventListener("click", function () {
  navDialog.classList.add("hidden");
});

themeBtn.addEventListener("click", function (event) {
  if (event.target.classList.contains("ri-moon-fill")) {
    event.target.classList.add("hidden");
    event.target.nextElementSibling.classList.remove("hidden");
    localStorage.setItem("theme", "dark");
    aboutBody.classList.add("dark");
  } else if (event.target.classList.contains("ri-sun-fill")) {
    event.target.classList.add("hidden");
    event.target.previousElementSibling.classList.remove("hidden");
    localStorage.setItem("theme", "");
    aboutBody.classList.remove("dark");
  }
});
