import { addBuyButton } from "../initialization/addButton.mjs";

export function displayProducts(products) {
  const container = document.querySelector(".list_of_items");
  container.innerHTML = "";

  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("image-item");

    const productLink = document.createElement("a");
    productLink.href = `jack.html?productId=${product.id}`;

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.title;

    const productTitle = document.createElement("p");
    productTitle.textContent = product.title;

    const productPrice = document.createElement("p");
    productPrice.textContent = `${product.price} kr`;

    productLink.appendChild(productImage);
    productItem.appendChild(productLink);
    productItem.appendChild(productTitle);
    productItem.appendChild(productPrice);

    container.appendChild(productItem);
  });
}

export function displayProductDetails(product) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  const productItem = document.createElement("div");
  productItem.classList.add("product-item");

  const productTitle = document.createElement("h1");
  productTitle.textContent = product.title;

  const productDescription = document.createElement("p");
  productDescription.textContent = product.description;

  const productImage = document.createElement("img");
  productImage.src = product.image;
  productImage.alt = product.title;

  const productPrice = document.createElement("p");
  productPrice.textContent = `${product.price} kr`;

  productItem.appendChild(productImage);
  productItem.appendChild(productTitle);
  productItem.appendChild(productDescription);
  productItem.appendChild(productPrice);

  container.appendChild(productItem);

  if (product.sizes && product.sizes.length > 0) {
    const sizeLabel = document.createElement("label");
    sizeLabel.textContent = "Size:";
    sizeLabel.htmlFor = "sizeSelector";

    const sizeSelector = document.createElement("select");
    sizeSelector.id = "sizeSelector";
    sizeSelector.name = "size";

    product.sizes.forEach((size) => {
      const option = document.createElement("option");
      option.value = size;
      option.textContent = size;
      sizeSelector.appendChild(option);
    });

    productItem.appendChild(sizeLabel);
    productItem.appendChild(sizeSelector);
    addBuyButton(product, productItem);
  }
}
