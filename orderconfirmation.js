// Mock function to simulate fetching order details (replace with real backend data later)
const getOrderDetails = () => {
    return {
        orderNumber: "ORD123456789",
        orderTotal: 1500, // Replace with dynamic total fetched from localStorage or backend
        deliveryDate: calculateDeliveryDate(5), // 5 days from today
    };
};

// Function to calculate delivery date
const calculateDeliveryDate = (days) => {
    const today = new Date();
    today.setDate(today.getDate() + days);
    return today.toDateString();
};

// Populate order details on the page
document.addEventListener("DOMContentLoaded", () => {
    const orderDetails = getOrderDetails();

    document.getElementById("orderNumber").textContent = orderDetails.orderNumber;
    document.getElementById("orderTotal").textContent = orderDetails.orderTotal;
    document.getElementById("deliveryDate").textContent = orderDetails.deliveryDate;

    // Add click event for "Continue Shopping" button
    document.getElementById("continueShopping").addEventListener("click", () => {
        window.location.href = "index.html"; // Redirect to homepage
    });
});
