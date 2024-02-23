import { fetchProducts, fetchAndApplyFilters } from "./utility/api.mjs";

document.addEventListener("DOMContentLoaded", function () {
  fetchProducts();
});

document.getElementById("filterButton").addEventListener("click", () => {
  const selectedGender = document.getElementById("genderFilter").value;
  const selectedCategory = document.getElementById("categoryFilter").value;
  fetchAndApplyFilters(selectedGender, selectedCategory);
});
