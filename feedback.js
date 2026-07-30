// Feedback Form Handler
// This file handles the feedback form submission and validation

document.addEventListener('DOMContentLoaded', function() {
    // Get the feedback form
    const feedbackForm = document.getElementById('feedbackForm');

    // Add submit event listener
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', handleFeedbackSubmit);
    }

    // Set active nav link
    setActiveNavLink();
});

// Function to handle feedback form submission
function handleFeedbackSubmit(event) {
    // Prevent form from submitting normally
    event.preventDefault();

    // Get error message element
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Clear previous messages
    errorMessage.classList.remove('show');
    successMessage.classList.remove('show');

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const rating = document.getElementById('rating').value;
    const message = document.getElementById('message').value.trim();

    // Validate form fields
    if (!name || !email || !rating || !message) {
        // Show error message
        errorMessage.textContent = 'Please fill in all fields!';
        errorMessage.classList.add('show');
        return;
    }

    // Validate email format
    if (!isValidEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address!';
        errorMessage.classList.add('show');
        return;
    }

    // Validate message length (at least 10 characters)
    if (message.length < 10) {
        errorMessage.textContent = 'Message must be at least 10 characters long!';
        errorMessage.classList.add('show');
        return;
    }

    // Create feedback object
    const feedback = {
        id: Date.now(), // Unique ID based on timestamp
        name: name,
        email: email,
        rating: rating,
        message: message,
        date: new Date().toLocaleDateString() // Store submission date
    };

    // Get existing feedback array from localStorage
    const feedbackArray = JSON.parse(localStorage.getItem('feedbackArray')) || [];

    // Add new feedback to array
    feedbackArray.push(feedback);

    // Save updated array to localStorage
    localStorage.setItem('feedbackArray', JSON.stringify(feedbackArray));

    // Show success message
    successMessage.textContent = 'Thank you! Your feedback has been submitted successfully!';
    successMessage.classList.add('show');

    // Reset form
    document.getElementById('feedbackForm').reset();

    // Auto-hide success message after 3 seconds
    setTimeout(function() {
        successMessage.classList.remove('show');
    }, 3000);
}

// Function to validate email format
function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to set active navigation link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}
