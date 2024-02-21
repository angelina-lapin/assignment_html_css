document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('productId'); 
    
    if (productId) {
      fetchProductDetails(productId);
    }
  });
  
  function fetchProductDetails(productId) {
    fetch(`https://api.noroff.dev/api/v1/rainy-days/${productId}`) 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(product => {
        displayProductDetails(product);
      })
      .catch(error => console.error('Error fetching product details:', error));
  }
  
  function displayProductDetails(product) {
    const container = document.querySelector('.container');
    container.innerHTML = ''; 
    
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    // Other elements are added here...
     
    // Add Buy Button
    addBuyButton(product, productItem);
    
    container.appendChild(productItem);
  }
  
  function addBuyButton(product, productItem) {
    const buyButton = document.createElement('button');
    buyButton.textContent = 'Add to cart';
    buyButton.classList.add('add-to-cart');
    buyButton.addEventListener('click', () => {
      addToCart(product);
    });
    productItem.appendChild(buyButton);
  }
  
  function addToCart(product) {
    // Implementation remains the same...
  }
  
  function createCart() {
    // Implementation remains the same...
  }
  
  createCart();
  