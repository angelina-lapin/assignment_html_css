function createCart() {
    const cart = localStorage.getItem('cart');
    if (!cart) {
    localStorage.setItem('cart', JSON.stringify([]));
    }
}

export {createCart};