const menuBar = document.querySelector("#menu");
const close = document.querySelector("#close");
const navDialog = document.querySelector("#navDialog");
const homeBody = document.querySelector("body");
const themeBtn = document.querySelector("#theme");
let themeStored = localStorage.getItem("theme");
let toastContainer = document.querySelector("#toast-container");
const companiesScroll = document.querySelector("#companies-list");
const chatToggler = document.querySelector("#chat-toggler");

const chatClose = document.querySelector("#chat-close");
const chatOpen = document.querySelector("#chat-icon");

const chatBox = document.querySelector("#Chat-Box");

const chatPopupHide = ["scale-[0.2]", "opacity-0", "pointer-events-none"];
const iconHide = ["opacity-0", "pointer-events-none"];

let prodData = JSON.parse(localStorage.getItem("Products"));

let documentFragment = document.querySelector("#template-card");
let featuredProdContainer = document.querySelector("#f-card-wrapper");
let newArrivals = document.querySelector("#n-card-wrapper");

if (themeStored === "dark") {
  themeBtn.querySelector(".ri-sun-fill").classList.remove("hidden");
  themeBtn.querySelector(".ri-moon-fill").classList.add("hidden");
  homeBody.classList.add("dark");
} else {
  themeBtn.querySelector(".ri-sun-fill").classList.add("hidden");
  themeBtn.querySelector(".ri-moon-fill").classList.remove("hidden");
  homeBody.classList.remove("dark");
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
    homeBody.classList.add("dark");
  } else if (event.target.classList.contains("ri-sun-fill")) {
    event.target.classList.add("hidden");
    event.target.previousElementSibling.classList.remove("hidden");
    localStorage.setItem("theme", "");
    homeBody.classList.remove("dark");
  }
});

function setProductsAndRender(data) {
  prodData = data;
  localStorage.setItem("Products", JSON.stringify(prodData));
  renderCards(prodData);
}

function renderCards(prodData) {
  featuredProdContainer.innerHTML = "";
  newArrivals.innerHTML = "";

  prodData.forEach(function (item, idx) {
    let card = document.importNode(documentFragment.content, true);
    if (idx < 3) {
      homeCards(card, item);
      featuredProdContainer.appendChild(card);
    }
    if (idx >= 3 && idx < 6) {
      homeCards(card, item);
      newArrivals.appendChild(card);
    }
  });

  featuredProdContainer.querySelectorAll(".cards").forEach(function (card) {
    card.querySelector("#inc-dec").addEventListener("click", function (event) {
      updateQuantity(card, event);
    });
    card
      .querySelector("#addToCart")
      .addEventListener("click", function (event) {
        addToCartState(card, event);
      });
  });

  newArrivals.querySelectorAll(".cards").forEach(function (card) {
    card.querySelector("#inc-dec").addEventListener("click", function (event) {
      updateQuantity(card, event);
    });
    card
      .querySelector("#addToCart")
      .addEventListener("click", function (event) {
        addToCartState(card, event);
      });
  });
}

if (!JSON.parse(localStorage.getItem("Products"))) {
  fetch("./products.json")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        let error = res.text();
        throw new Error(error);
      }
    })
    .then((data) => {
      data.forEach((element) => {
        element.quantity = 1;
        element.inCart = false;
      });
      localStorage.setItem("Products", JSON.stringify(data));
      setProductsAndRender(data);
    })
    .catch((error) => console.error(error.message));
} else {
  prodData = JSON.parse(localStorage.getItem("Products"));
  renderCards(prodData);
}
function homeCards(card, item) {
  card.querySelector(".cards").id = item.id;
  card.querySelector("#p-img").src = item.src;
  card.querySelector("#p-name").textContent = item.name;
  card.querySelector("#stock").textContent = item.stock;
  card.querySelector("#order-quantity").textContent = item.quantity;
  card.querySelector("#price").textContent = `NRS.${item.price}`;
  updateCartQuantity();
}

function updateQuantity(card, event) {
  if (event.target.id === "increment") {
    prodData.forEach(function (product) {
      if (product.id === Number(card.id) && product.quantity < product.stock) {
        let quantity = Number(
          card.querySelector("#order-quantity").textContent
        );
        quantity++;
        if (quantity < product.stock) {
          card.querySelector("#order-quantity").textContent = quantity;
        }
      }
    });
    localStorage.setItem("Products", JSON.stringify(prodData));
  } else if (event.target.id === "decrement") {
    prodData.forEach(function (product) {
      if (product.id === Number(card.id) && product.quantity > 1) {
        let quantity = Number(
          card.querySelector("#order-quantity").textContent
        );
        quantity--;
        if (quantity >= 1) {
          card.querySelector("#order-quantity").textContent = quantity;
        }
      }
    });
    localStorage.setItem("Products", JSON.stringify(prodData));
  }
}

function timeOutfunction() {
  setTimeout(function () {
    toastContainer.innerHTML = "";
  }, 6000);
}

function addToCartState(card, event) {
  if (event.target.id === "addToCart") {
    prodData.forEach(function (product) {
      if (Number(card.id) === product.id && !product.inCart) {
        product.inCart = true;
        product.quantity = Number(
          card.querySelector("#order-quantity").textContent
        );
        toastContainer.innerHTML += `
        <div id="toast-success"
                class="flex relative z-50 items-center w-full transition duration-300 max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
                role="alert">
                <div
                    class="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span class="sr-only">Check icon</span>
                </div>
                <div class="ms-3 text-sm font-normal">Product with Id ${product.id} added sucessfully</div> 
            </div>`;
        updateCartQuantity();
        timeOutfunction();
      } else if (Number(card.id) === product.id && product.inCart) {
        toastContainer.innerHTML += ` <div id="toast-warning"
                class="flex items-center w-full max-w-xs p-4 my-3 text-gray-500 bg-white rounded-lg shadow-sm transition duration-300 dark:text-gray-400 dark:bg-gray-800"
                role="alert">
                <div
                    class="inline-flex items-center justify-center shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                    </svg>
                    <span class="sr-only">Warning icon</span>
                </div>
                <div class="ms-3 text-sm font-normal">Product with ID ${product.id} is already in the cart.</div>
            </div>`;
        product.quantity = Number(
          card.querySelector("#order-quantity").textContent
        );
        updateCartQuantity();
        timeOutfunction();
      }
    });
    localStorage.setItem("Products", JSON.stringify(prodData));
  }
}

function updateCartQuantity() {
  let inCart = prodData.filter(function (product) {
    return product.inCart === true;
  });

  let totalInCart = inCart.reduce(function (total, product) {
    return total + product.quantity;
  }, 0);

  document.querySelector("#cart-quantity").textContent = totalInCart;
}

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

setIntersectionObserver(companiesScroll, 0.4);

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
