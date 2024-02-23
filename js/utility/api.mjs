import { showLoader, hideLoader } from "./loader.mjs";
import { displayProducts } from "./displayProduct.mjs";

async function fetchProducts() {
  try {
    showLoader();
    const response = await fetch("https://api.noroff.dev/api/v1/rainy-days");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    displayProducts(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    hideLoader();
  }
}

async function fetchAndApplyFilters(gender, category) {
  try {
    showLoader();
    const response = await fetch("https://api.noroff.dev/api/v1/rainy-days");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const products = await response.json();

    let filteredProducts = products;

    if (gender !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.gender === gender
      );
    }

    if (category === "onSale") {
      filteredProducts = filteredProducts.filter((product) => product.onSale);
    } else if (category === "favorite") {
      filteredProducts = filteredProducts.filter((product) => product.favorite);
    }

    displayProducts(filteredProducts);
  } catch (error) {
    console.error("Error fetching or filtering products:", error);
  } finally {
    hideLoader();
  }
}

export { fetchProducts, fetchAndApplyFilters };
