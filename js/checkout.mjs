document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("payButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const address = document.getElementById("address").value;

      document.getElementById(
        "alertMessage"
      ).textContent = `Name: ${name}, Address: ${address}. Confirm to proceed.`;
      document.getElementById("customAlertModal").style.display = "block";
    });

  document
    .getElementById("continueButton")
    .addEventListener("click", function () {
      processFormDataAndRedirect();
    });

  document.getElementsByClassName("close")[0].onclick = function () {
    document.getElementById("customAlertModal").style.display = "none";
  };

  window.onclick = function (event) {
    const modal = document.getElementById("customAlertModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

function processFormDataAndRedirect() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const cardInfo = document.getElementById("card-info").value;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const orderSummary = {
    name,
    address,
    items: cart,
    total,
  };
  localStorage.setItem("orderSummary", JSON.stringify(orderSummary));

  localStorage.removeItem("cart");

  window.location.href = "confirmation.html";
}
