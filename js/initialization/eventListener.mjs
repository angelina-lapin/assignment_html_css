import { displayProductDetails } from "../utility/displayProduct.mjs";
import { addBuyButton } from "./addButton.mjs";

function initializeProductDetails() {
    document.addEventListener('DOMContentLoaded', function(){
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('productId');
        
        if(productId){
            fetchProductDetails(productId);
        }
    });
}

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




export { initializeProductDetails };