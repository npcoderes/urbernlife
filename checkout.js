import { updateCartProductTotal } from './updateCartProductTotal.js';

document.addEventListener('DOMContentLoaded', () => {
    // Reuse the existing cart total logic
    updateCartProductTotal();

    // Handle form submission
    document.getElementById("checkout-form").addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const address = document.getElementById("address").value.trim();
        const payment = document.getElementById("payment").value;

        if (!name || !email || !address || !payment) {
            alert("Please fill out all the required fields.");
            return;
        }

        alert("Order placed successfully!");
        // Later: Send form data and cart details to backend using POST request

        // Clear the cart after placing the order
        localStorage.removeItem("cartProductLS");

        // Redirect to the Order Confirmation page
        window.location.href = "orderconfirmation.html";

    });
});
