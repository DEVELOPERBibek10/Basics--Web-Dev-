const themeBtn = document.querySelector("#theme");
let themeStored = localStorage.getItem("theme");
const menuBar = document.querySelector("#menu");
const close = document.querySelector("#close");
const navDialog = document.querySelector("#navDialog");
const aboutBody = document.querySelector("body");
const companiesScroll = document.querySelector("#companies-list");
let prodData = JSON.parse(localStorage.getItem("Products"));

const chatBox = document.querySelector("#Chat-Box");
const chatToggler = document.querySelector("#chat-toggler");
const chatOpen = document.querySelector("#chat-icon");
const chatClose = document.querySelector("#chat-close");
const chatPopupHide = ["scale-[0.2]", "opacity-0", "pointer-events-none"];
const iconHide = ["opacity-0", "pointer-events-none"];

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

function setIntersectionObserver(element, speed) {
  const observer = new IntersectionObserver(function (entries) {
    const checkIntersection = entries[0].isIntersecting;
    if (checkIntersection) {
      document.addEventListener("scroll", handelScroll);
    } else {
      document.removeEventListener("scroll", handelScroll);
    }
  });
  observer.observe(element);
  function handelScroll() {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;
    element.style.transform = `translateX(${translateX}px)`;
  }
}

setIntersectionObserver(companiesScroll, 0.5);

chatToggler.addEventListener("click", function (event) {
  chatToggler.classList.add("rotate-360");
  if (event.target.closest("#chat-close")) {
    chatPopupHide.forEach(function (className) {
      chatBox.classList.add(className);
    });
    chatClose.classList.add("rotate-90");
    chatOpen.classList.remove("rotate-90");
    iconHide.forEach(function (className) {
      chatOpen.classList.remove(className);
      chatClose.classList.add(className);
    });
    return;
  }
  chatPopupHide.forEach(function (className) {
    chatBox.classList.remove(className);
  });
  iconHide.forEach(function (className) {
    chatOpen.classList.add(className);
    chatClose.classList.remove(className);
  });
  chatClose.classList.remove("rotate-90");
  chatOpen.classList.add("rotate-90");
});
