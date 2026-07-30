// Get form elements
const registerForm = document.getElementById('registerForm');
const errorMessage = document.getElementById('error-message');

// Handle form submission
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate passwords match
    if (password !== confirmPassword) {
        showError('Passwords do not match!');
        return;
    }

    // Validate password length
    if (password.length < 6) {
        showError('Password must be at least 6 characters long!');
        return;
    }

    // Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email already exists
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        showError('Email already registered! Please login.');
        return;
    }

    // Create new user object
    const newUser = {
        name: name,
        email: email,
        password: password,
        quizzesTaken: 0,
        bestScore: 0,
        scores: []
    };

    // Add user to array
    users.push(newUser);

    // Save to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Show success message
    alert('Registration successful! Please login.');

    // Redirect to login page
    window.location.href = 'login.html';
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
