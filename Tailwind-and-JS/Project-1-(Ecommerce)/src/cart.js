let prodData = JSON.parse(localStorage.getItem("Products"));
let theme = localStorage.getItem("theme");
let itemsCount = document.querySelector("#items-count");
let toastContainer = document.querySelector("#toast-container");
const themeBtn = document.querySelector("#theme");
const cartBody = document.querySelector("body");
const templateCartCard = document.querySelector("#template-cart-card");
const cartCardWrapper = document.querySelector("#cart-card-wrapper");
const proceedToCheckout = document.querySelector("#proceedToCheckout");
let modal = document.getElementById("modal");
let openModalBtn = document.getElementById("openModal");
let closeModalBtns = [
  document.getElementById("closeIcon"),
  document.getElementById("closeButton"),
];

if (theme === "dark") {
  themeBtn.querySelector(".ri-sun-fill").classList.remove("hidden");
  themeBtn.querySelector(".ri-moon-fill").classList.add("hidden");
  cartBody.classList.add("dark");
} else {
  themeBtn.querySelector(".ri-sun-fill").classList.add("hidden");
  themeBtn.querySelector(".ri-moon-fill").classList.remove("hidden");
  cartBody.classList.remove("dark");
}

themeBtn.addEventListener("click", function (event) {
  if (event.target.classList.contains("ri-moon-fill")) {
    event.target.classList.add("hidden");
    event.target.nextElementSibling.classList.remove("hidden");
    localStorage.setItem("theme", "dark");
    cartBody.classList.add("dark");
  } else if (event.target.classList.contains("ri-sun-fill")) {
    event.target.classList.add("hidden");
    event.target.previousElementSibling.classList.remove("hidden");
    localStorage.setItem("theme", "");
    cartBody.classList.remove("dark");
  }
});

function appendCart(cartCard, product) {
  cartCard.querySelector(".cart-card").id = product.id;
  cartCard.querySelector("img").src = product.src;
  cartCard.querySelector("#name").textContent = product.name;
  cartCard.querySelector("#price").textContent = `NRS.${product.price}`;
  cartCard.querySelector("#quantity").textContent = product.quantity;
  cartCardWrapper.appendChild(cartCard);
}

function timeOutfunction() {
  setTimeout(function () {
    toastContainer.innerHTML = "";
  }, 5000);
}

function updateQuantity(card, event) {
  if (event.target.id === "increment") {
    prodData.forEach(function (product) {
      if (product.id === Number(card.id) && product.quantity < product.stock) {
        product.quantity++;
        itemCount();
        card.querySelector("#quantity").textContent = product.quantity;
        updateCartQuantity();
        renderCartAndSummary(product);
      }
    });
    localStorage.setItem("Products", JSON.stringify(prodData));
  } else if (event.target.id === "decrement") {
    prodData.forEach(function (product) {
      if (product.id === Number(card.id) && product.quantity > 1) {
        product.quantity--;
        card.querySelector("#quantity").textContent = product.quantity;
        itemCount();
        updateCartQuantity();
        renderCartAndSummary(product);
      }
    });
    localStorage.setItem("Products", JSON.stringify(prodData));
  } else if (event.target.id === "remove") {
    prodData.forEach(function (product) {
      if (product.id === Number(card.id)) {
        product.inCart = false;
        product.quantity = 1;
        renderCartAndSummary(product);
        itemCount();
        updateCartQuantity();
        toastContainer.innerHTML += `<div id="toast-danger" class="flex items-center transition duration-300 w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div class="inline-flex items-center justify-center shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
        </svg>
        <span class="sr-only">Error icon</span>
    </div>
    <div class="ms-3 text-sm font-normal">${
      product.id
        ? product.id === ""
          ? "N/A"
          : `Product with ID ${product.id} has been removed.`
        : "Invalid ID"
    }</div>
    
</div>`;
        card.remove(".cart-card");
        timeOutfunction();
      }
    });
    localStorage.setItem("Products", JSON.stringify(prodData));
  }
}

function updateCartQuantity() {
  let inCart = prodData.filter(function (product) {
    return product.inCart;
  });

  let totalInCart = inCart.reduce(function (total, product) {
    return total + product.quantity;
  }, 0);

  document.querySelector("#cart-quantity").textContent = totalInCart;
  localStorage.setItem("Products", JSON.stringify(prodData));
}

function itemCount() {
  let filterdArray = prodData.filter(function (product) {
    return product.inCart === true;
  });
  let totalItems = filterdArray.reduce(function (total, items) {
    return total + items.quantity;
  }, 0);
  itemsCount.textContent = totalItems;
}

prodData.forEach((product) => {
  if (product.inCart) {
    const cartCard = document.importNode(templateCartCard.content, true);
    appendCart(cartCard, product);
    itemCount();
    updateCartQuantity();
    renderCartAndSummary(product);
  }
});

cartCardWrapper.querySelectorAll(".cart-card").forEach(function (item) {
  item.addEventListener("click", function (event) {
    updateQuantity(item, event);
  });
});

function renderCartAndSummary(product) {
  // Individual Product Total
  cartCardWrapper.querySelectorAll(".cart-card").forEach(function (card) {
    if (product.id === Number(card.id)) {
      card.querySelector("#price").textContent = `NRS.${
        product.quantity * product.price
      }`;
    }
  });
  //Order Summary Section
  let filterdArray = prodData.filter(function (product) {
    return product.inCart;
  });
  let reduceArrayOrgTotal = filterdArray.reduce(function (total, product) {
    return total + product.price * product.quantity;
  }, 0);
  let reduceArrayTotalDiscount = filterdArray.reduce(function (total, product) {
    return total + product.price * product.quantity * 0.4;
  }, 0);
  let actualTotal = Math.round(reduceArrayOrgTotal - reduceArrayTotalDiscount);
  document.querySelector("#org-price").textContent =
    Number(reduceArrayOrgTotal).toLocaleString("en-IN");
  document.querySelector("#discount").textContent = Math.round(
    reduceArrayTotalDiscount
  ).toLocaleString("en-IN");
  document.querySelector(
    "#total"
  ).textContent = `NRS.${actualTotal.toLocaleString("en-IN")}`;
}

proceedToCheckout.addEventListener("click", () => {
  let incartCount = 0;
  prodData.forEach(function (product) {
    if (product.inCart) {
      incartCount++;
    }
  });
  if (incartCount) {
    modal.classList.remove("hidden");
  }
});

closeModalBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    prodData.forEach(function (product) {
      product.inCart = false;
      product.quantity = 1;
      renderCartAndSummary(product);
    });
    localStorage.setItem("Products", JSON.stringify(prodData));
    updateCartQuantity();
    itemCount();
    cartCardWrapper.innerHTML = "";
    modal.classList.add("hidden");
  });
});
