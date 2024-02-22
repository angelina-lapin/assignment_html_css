document.addEventListener('DOMContentLoaded', () => {
    const confirmationDetailsContainer = document.querySelector('.confirmation-details');
    const orderSummary = JSON.parse(localStorage.getItem('orderSummary'));

    if (!orderSummary) {
        confirmationDetailsContainer.innerHTML = '<p>No order details found.</p>';
        return;
    }

    let detailsHtml = `<h2>Order Summary</h2>
                        <p>Name: ${orderSummary.name}</p>
                        <p>Address: ${orderSummary.address}</p>
                        <h3>Items:</h3>`;

    orderSummary.items.forEach(item => {
        detailsHtml += `
            <div class="order-item">
                <img src="${item.image}" alt="${item.title}" style="width:100px; height: auto;">
                <h4>${item.title}</h4>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: ${item.price}kr</p>
            </div>
        `;
    });

    detailsHtml += `<p><strong>Total: ${orderSummary.total.toFixed(2)}kr</strong></p>`;

    confirmationDetailsContainer.innerHTML = detailsHtml;

    // Optionally clear the orderSummary from localStorage if it's no longer needed
    localStorage.removeItem('orderSummary');
});
