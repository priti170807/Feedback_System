// Get form elements
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

// Handle form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find user with matching email and password
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Login successful - save current user to localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));

        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        // Login failed
        showError('Invalid email or password!');
    }
});

// Function to show error messages
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');

    // Hide error after 3 seconds
    setTimeout(() => {
        errorMessage.classList.remove('show');
    }, 3000);
}
