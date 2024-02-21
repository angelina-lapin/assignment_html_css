function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const itemIndex = cart.findIndex(function (currentProduct) {
      if (product.id === currentProduct.id) {
        return true;
      }
      return false;
    });
    if (itemIndex === -1) {
      cart.push({ ...product, quantity: 1 });
    } else {
      cart[itemIndex].quantity += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

export{addToCart};