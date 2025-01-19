document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name && email && password) {
        // Mock registration (replace with API call later)
        alert("Registration successful!");
        window.location.href = "login.html"; // Redirect to login page
    } else {
        alert("Please fill in all fields.");
    }
});
