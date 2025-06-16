const mobMenu = document.querySelector("#menu");
const mobClose = document.querySelector("#close");
const navDialog = document.querySelector("#navDialog");

mobMenu.addEventListener("click", function () {
  navDialog.classList.remove("hidden");
});
mobClose.addEventListener("click", function () {
  navDialog.classList.add("hidden");
});
