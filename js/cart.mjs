document.addEventListener("DOMContentLoaded", () => {
  initializeCart();
});

function initializeCart() {
  const cartContainer = document.getElementById("cart-container");

  setupEventListeners(cartContainer);

  displayCartItems(cartContainer);
  updateCartDisplay();
}

function setupEventListeners(cartContainer) {
  cartContainer.addEventListener("click", function (event) {
    if (event.target && event.target.matches(".remove-item")) {
      const productId = event.target.getAttribute("data-product-id");
      removeProductFromCart(productId);
    }
  });
}

function displayCartItems(cartContainer) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.forEach((product) => {
    const productElement = createProductElement(product);
    cartContainer.appendChild(productElement);
  });
}

function createProductElement(product) {
  const productElement = document.createElement("div");
  productElement.classList.add("cart-item");

  const productImage = document.createElement("img");
  productImage.src = product.image;
  productImage.alt = product.title;

  productElement.innerHTML = `
    <h3>${product.title}</h3>
    <p>Quantity: ${product.quantity}</p>
    <p>Price: ${product.price}kr</p>
  `;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-item");
  removeButton.setAttribute("data-product-id", product.id);

  productElement.appendChild(productImage);
  productElement.appendChild(removeButton);

  return productElement;
}

function removeProductFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((product) => product.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  cart.forEach((product) => {
    total += product.price * product.quantity;
    const productElement = createProductElement(product);
    cartContainer.appendChild(productElement);
  });

  const totalElement = document.createElement("div");
  totalElement.classList.add("total");
  totalElement.textContent = `Total: ${total.toFixed(2)}kr`;
  cartContainer.appendChild(totalElement);

  appendCheckoutButton(cartContainer);
}

function appendCheckoutButton(cartContainer) {
  const checkoutButton = document.createElement("button");
  checkoutButton.textContent = "Checkout";
  checkoutButton.classList.add("checkout-button");
  checkoutButton.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });

  cartContainer.appendChild(checkoutButton);
}
