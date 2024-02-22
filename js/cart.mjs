document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-container');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartContainer.addEventListener('click', function(event) {
        if (event.target && event.target.matches('.remove-item')) {
            const productId = event.target.getAttribute('data-product-id');
            removeProductFromCart(productId);
        }
    });

    

    cart.forEach(product => {
        const productElement = createProductElement(product);
        cartContainer.appendChild(productElement);
    });

    updateCartDisplay();
});

function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('cart-item');


    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.title;
    
    productElement.innerHTML = `
        <h3>${product.title}</h3>
        <p>Quantity: ${product.quantity}</p>
        <p>Price: ${product.price}kr</p>
    `;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-item');
    removeButton.setAttribute('data-product-id', product.id);
    
    productElement.appendChild(removeButton);
    productElement.prepend(productImage); 
    
    return productElement;
}
createProductElement();

function removeProductFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cart = cart.filter(product => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCartDisplay();
  }

function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = ''; 
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    
    cart.forEach(product => {
        total += product.price * product.quantity;
        const productElement = createProductElement(product);
        cartContainer.appendChild(productElement);
    });
    
    const totalElement = document.createElement('div');
    totalElement.classList.add('total');
    totalElement.textContent = `Total: ${total.toFixed(2)}kr`;
    cartContainer.appendChild(totalElement);

    appendCheckoutButton();
}

updateCartDisplay();

function appendCheckoutButton() {
    const cartContainer = document.getElementById('cart-container');
    const checkoutButton = document.createElement('button');
    checkoutButton.textContent = 'Checkout';
    checkoutButton.classList.add('checkout-button'); 
    
    
    cartContainer.appendChild(checkoutButton);
    
    checkoutButton.addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });
}



