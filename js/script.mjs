document.addEventListener('DOMContentLoaded', function() {
  fetchProducts();
});

function fetchProducts() {
  fetch('https://api.noroff.dev/api/v1/rainy-days')
      .then(response => response.json())
      .then(data => displayProducts(data))
      .catch(error => console.error('Error fetching data:', error));
}

document.getElementById('filterButton').addEventListener('click', () => {
  const selectedGender = document.getElementById('genderFilter').value;
  const selectedCategory = document.getElementById('categoryFilter').value;
  fetchAndApplyFilters(selectedGender, selectedCategory);
});

function fetchAndApplyFilters(gender, category) {
  fetch('https://api.noroff.dev/api/v1/rainy-days')
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(products => {
          let filteredProducts = gender !== 'all' ? products.filter(product => product.gender === gender) : products;
          if (category === 'onSale') {
              filteredProducts = filteredProducts.filter(product => product.onSale);
          } else if (category === 'favorite') {
              filteredProducts = filteredProducts.filter(product => product.favorite);
          }
          displayProducts(filteredProducts);
      })
      .catch(error => {
          console.error('Error fetching or filtering products:', error);
      });
}

function displayProducts(products) {
  const container = document.querySelector('.list_of_items');
  container.innerHTML = ''; // Clear existing items

  products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('image-item');

    const productLink = document.createElement('a');
    productLink.href = `jack.html?productId=${product.id}`;

    const productImage = document.createElement('img');
    productImage.src = product.image; // Ensure your API returns a direct link to the image
    productImage.alt = product.title;

    const productTitle = document.createElement('p');
    productTitle.textContent = product.title;

    const productPrice = document.createElement('p');
    productPrice.textContent = `${product.price} $`; // Adjust formatting as necessary

    productLink.appendChild(productImage);
    productItem.appendChild(productLink);
    productItem.appendChild(productTitle);
    productItem.appendChild(productPrice);

    container.appendChild(productItem); // Append the item to the container
  });
}
