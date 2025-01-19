document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        // Mock validation (replace with API call later)
        alert("Logged in successfully!");
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        alert("Please fill in all fields.");
    }
});
