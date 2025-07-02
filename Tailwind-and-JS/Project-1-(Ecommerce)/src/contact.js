let themeStored = localStorage.getItem("theme");
const themeBtn = document.querySelector("#theme");
const menuBar = document.querySelector("#menu");
const close = document.querySelector("#close");
const navDialog = document.querySelector("#navDialog");
const contactBody = document.querySelector("body");
const emailContainer = document.getElementById("email-container");
const submit = document.getElementById("submit");

let prodData = JSON.parse(localStorage.getItem("Products"));

if (themeStored === "dark") {
  themeBtn.querySelector(".ri-sun-fill").classList.remove("hidden");
  themeBtn.querySelector(".ri-moon-fill").classList.add("hidden");
  contactBody.classList.add("dark");
} else {
  themeBtn.querySelector(".ri-sun-fill").classList.add("hidden");
  themeBtn.querySelector(".ri-moon-fill").classList.remove("hidden");
  contactBody.classList.remove("dark");
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
    contactBody.classList.add("dark");
  } else if (event.target.classList.contains("ri-sun-fill")) {
    event.target.classList.add("hidden");
    event.target.previousElementSibling.classList.remove("hidden");
    localStorage.setItem("theme", "");
    contactBody.classList.remove("dark");
  }
});

function updateCartQuantity() {
  let inCart = prodData.filter(function (product) {
    return product.inCart === true;
  });

  let totalInCart = inCart.reduce(function (total, product) {
    return total + product.quantity;
  }, 0);

  document.querySelector("#cart-quantity").textContent = totalInCart;
}

updateCartQuantity();

function checkEmail() {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailInput = emailContainer.querySelector("#email");
  const invalidContainer = emailContainer.querySelector("#invalid");
  if (!regex.test(emailInput.value)) {
    invalidContainer.classList.remove("hidden");
    if (!emailInput.value) {
      invalidContainer.classList.add("hidden");
    }
    return false;
  } else {
    invalidContainer.classList.add("hidden");
    return true;
  }
}

function clearMessage(message) {
  setTimeout(function () {
    message.textContent = "";
  }, 5000);
}

emailContainer.querySelector("#email").addEventListener("keyup", checkEmail);
submit.addEventListener("click", function () {
  let message = document.querySelector("#message");
  const form = document.querySelector("form");
  let isEmailValid = checkEmail();
  if (isEmailValid) {
    message.style.color = "green";
    message.textContent = "Submission sucessful";
    form.reset();
    clearMessage(message);
  } else {
    message.style.color = "red";
    message.textContent = "Please re-check email field";
    clearMessage(message);
  }
});
