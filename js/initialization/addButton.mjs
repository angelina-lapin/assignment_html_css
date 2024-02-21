import { addToCart } from "./utility/addToCart.mjs";

function addBuyButton(product, productItem) {
  const buyButton = document.createElement('button');
  buyButton.textContent = 'Add to cart';
  buyButton.classList.add('add-to-cart');
  buyButton.addEventListener('click', () => {
    addToCart(product);
  });
  productItem.appendChild(buyButton);
}

export{addBuyButton};
