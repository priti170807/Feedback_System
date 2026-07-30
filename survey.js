// Survey Form Handler
// This file handles the survey form submission and validation

document.addEventListener('DOMContentLoaded', function() {
    // Get the survey form
    const surveyForm = document.getElementById('surveyForm');

    // Add submit event listener
    if (surveyForm) {
        surveyForm.addEventListener('submit', handleSurveySubmit);
    }

    // Set active nav link
    setActiveNavLink();
});

// Function to handle survey form submission
function handleSurveySubmit(event) {
    // Prevent form from submitting normally
    event.preventDefault();

    // Get error and success message elements
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Clear previous messages
    errorMessage.classList.remove('show');
    successMessage.classList.remove('show');

    // Get form values for all 5 questions
    const question1 = document.querySelector('input[name="question1"]:checked');
    const question2 = document.querySelector('input[name="question2"]:checked');
    const question3 = document.querySelector('input[name="question3"]:checked');
    const question4 = document.querySelector('input[name="question4"]:checked');
    const question5 = document.querySelector('input[name="question5"]:checked');

    // Check if all questions are answered
    if (!question1 || !question2 || !question3 || !question4 || !question5) {
        errorMessage.textContent = 'Please answer all questions!';
        errorMessage.classList.add('show');
        return;
    }

    // Create survey response object
    const surveyResponse = {
        id: Date.now(), // Unique ID based on timestamp
        question1: question1.value,
        question2: question2.value,
        question3: question3.value,
        question4: question4.value,
        question5: question5.value,
        date: new Date().toLocaleDateString() // Store submission date
    };

    // Get existing survey array from localStorage
    const surveyArray = JSON.parse(localStorage.getItem('surveyArray')) || [];

    // Add new survey response to array
    surveyArray.push(surveyResponse);

    // Save updated array to localStorage
    localStorage.setItem('surveyArray', JSON.stringify(surveyArray));

    // Show success message
    successMessage.textContent = 'Thank you! Your survey response has been submitted successfully!';
    successMessage.classList.add('show');

    // Reset form
    document.getElementById('surveyForm').reset();

    // Auto-hide success message after 3 seconds
    setTimeout(function() {
        successMessage.classList.remove('show');
    }, 3000);
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
