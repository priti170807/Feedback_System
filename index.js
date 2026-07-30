// Initialize the home page with statistics
// This file displays feedback and survey statistics on the home page

document.addEventListener('DOMContentLoaded', function() {
    // Display feedback count and average rating
    displayFeedbackStats();
    // Display survey count
    displaySurveyStats();
    // Set active nav link
    setActiveNavLink();
});

// Function to display feedback statistics
function displayFeedbackStats() {
    // Get feedback data from localStorage
    const feedbackArray = JSON.parse(localStorage.getItem('feedbackArray')) || [];

    // Get the feedback count element
    const feedbackCountElement = document.getElementById('feedbackCount');

    // Display total feedback count
    if (feedbackCountElement) {
        feedbackCountElement.textContent = feedbackArray.length;
    }

    // Calculate and display average rating
    if (feedbackArray.length > 0) {
        // Sum all ratings
        const totalRating = feedbackArray.reduce((sum, feedback) => {
            return sum + parseInt(feedback.rating);
        }, 0);

        // Calculate average
        const averageRating = (totalRating / feedbackArray.length).toFixed(1);

        // Display average rating
        const avgRatingElement = document.getElementById('avgRating');
        if (avgRatingElement) {
            avgRatingElement.textContent = averageRating;
        }
    }
}

// Function to display survey statistics
function displaySurveyStats() {
    // Get survey data from localStorage
    const surveyArray = JSON.parse(localStorage.getItem('surveyArray')) || [];

    // Get the survey count element
    const surveyCountElement = document.getElementById('surveyCount');

    // Display total survey count
    if (surveyCountElement) {
        surveyCountElement.textContent = surveyArray.length;
    }
}

// Function to set active navigation link
function setActiveNavLink() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');

    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to current page link
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}
