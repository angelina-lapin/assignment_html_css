import { addBuyButton } from "../initialization/addButton.mjs";

function displayProductDetails(product) {
    const container = document.querySelector('.container');
    container.innerHTML = ''; 
    
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    
    const productTitle = document.createElement('h1');
    productTitle.textContent = product.title;
    
    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;
    
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.title;
    
    const productPrice = document.createElement('p');
    productPrice.textContent = `${product.price} kr`;
  
    
  
       
      productItem.appendChild(productImage);
      productItem.appendChild(productTitle);
      productItem.appendChild(productDescription);
      productItem.appendChild(productPrice);
     
      container.appendChild(productItem);
    addBuyButton(product, productItem);
      
    if (product.sizes && product.sizes.length > 0) {
      const sizeLabel = document.createElement('label');
      sizeLabel.textContent = 'Size:';
      sizeLabel.htmlFor = 'sizeSelector'; 
    
      const sizeSelector = document.createElement('select');
      sizeSelector.id = 'sizeSelector';
      sizeSelector.name = 'size';
    
      product.sizes.forEach(size => {
        const option = document.createElement('option');
        option.value = size;
        option.textContent = size;
        sizeSelector.appendChild(option);
      });
    
      productItem.appendChild(sizeLabel);
      productItem.appendChild(sizeSelector);
    }
    
     
}

addBuyButton();

export{displayProductDetails};

  
