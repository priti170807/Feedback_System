// Results Page Handler
// This file displays feedback and survey results/analytics

document.addEventListener('DOMContentLoaded', function() {
    // Display feedback results
    displayFeedbackResults();
    // Display survey results
    displaySurveyResults();
    // Set active nav link
    setActiveNavLink();
});

// Function to display feedback results
function displayFeedbackResults() {
    // Get feedback data from localStorage
    const feedbackArray = JSON.parse(localStorage.getItem('feedbackArray')) || [];

    // Get result container elements
    const totalFeedback = document.getElementById('totalFeedback');
    const avgRatingResult = document.getElementById('avgRatingResult');
    const ratingBreakdown = document.getElementById('ratingBreakdown');
    const feedbackList = document.getElementById('feedbackList');

    // Display total feedback count
    if (totalFeedback) {
        totalFeedback.textContent = feedbackArray.length;
    }

    // If no feedback, show message
    if (feedbackArray.length === 0) {
        avgRatingResult.textContent = '0.0';
        ratingBreakdown.innerHTML = '<p class="no-data">No feedback data yet</p>';
        feedbackList.innerHTML = '<p class="no-data">No feedback submitted yet</p>';
        return;
    }

    // Calculate average rating
    const totalRating = feedbackArray.reduce((sum, feedback) => {
        return sum + parseInt(feedback.rating);
    }, 0);
    const averageRating = (totalRating / feedbackArray.length).toFixed(1);
    avgRatingResult.textContent = averageRating;

    // Count ratings by value
    const ratingCounts = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };

    feedbackArray.forEach(feedback => {
        ratingCounts[feedback.rating]++;
    });

    // Display rating breakdown
    let ratingBreakdownHTML = '';
    const maxCount = Math.max(...Object.values(ratingCounts));

    for (let rating = 5; rating >= 1; rating--) {
        const count = ratingCounts[rating];
        const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
        const label = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][rating];

        ratingBreakdownHTML += `
            <div class="rating-item">
                <span class="rating-label">${rating} - ${label}</span>
                <div class="rating-bar">
                    <div class="rating-fill" style="width: ${percentage}%"></div>
                </div>
                <span class="rating-count">${count}</span>
            </div>
        `;
    }
    ratingBreakdown.innerHTML = ratingBreakdownHTML;

    // Display individual feedback entries
    let feedbackHTML = '';
    feedbackArray.forEach(feedback => {
        feedbackHTML += `
            <div class="feedback-item">
                <div class="feedback-header">
                    <span class="feedback-name">${escapeHtml(feedback.name)}</span>
                    <span class="feedback-rating">Rating: ${feedback.rating}/5</span>
                </div>
                <div class="feedback-email">Email: ${escapeHtml(feedback.email)}</div>
                <div class="feedback-message">${escapeHtml(feedback.message)}</div>
                <small style="color: #999;">Submitted: ${feedback.date}</small>
            </div>
        `;
    });
    feedbackList.innerHTML = feedbackHTML;
}

// Function to display survey results
function displaySurveyResults() {
    // Get survey data from localStorage
    const surveyArray = JSON.parse(localStorage.getItem('surveyArray')) || [];

    // Get result container elements
    const totalSurvey = document.getElementById('totalSurvey');
    const surveyResults = document.getElementById('surveyResults');

    // Display total survey count
    if (totalSurvey) {
        totalSurvey.textContent = surveyArray.length;
    }

    // If no survey responses, show message
    if (surveyArray.length === 0) {
        surveyResults.innerHTML = '<p class="no-data">No survey responses yet</p>';
        return;
    }

    // Count responses for each question
    const questionLabels = {
        question1: '1. How would you rate your overall experience?',
        question2: '2. Would you recommend us to others?',
        question3: '3. How would you rate our website design?',
        question4: '4. How easy was it to navigate the website?',
        question5: '5. Would you like to see new features?'
    };

    // Initialize option counters for each question
    const questionStats = {
        question1: {},
        question2: {},
        question3: {},
        question4: {},
        question5: {}
    };

    // Count responses
    surveyArray.forEach(survey => {
        for (let q = 1; q <= 5; q++) {
            const questionKey = `question${q}`;
            const answer = survey[questionKey];
            if (!questionStats[questionKey][answer]) {
                questionStats[questionKey][answer] = 0;
            }
            questionStats[questionKey][answer]++;
        }
    });

    // Display survey results
    let surveyHTML = '';
    for (let q = 1; q <= 5; q++) {
        const questionKey = `question${q}`;
        const questionLabel = questionLabels[questionKey];
        const stats = questionStats[questionKey];

        surveyHTML += `
            <div class="survey-question-result">
                <div class="survey-q-title">${questionLabel}</div>
        `;

        // Display each option with count
        for (const [option, count] of Object.entries(stats)) {
            const percentage = ((count / surveyArray.length) * 100).toFixed(1);
            surveyHTML += `
                <div class="survey-option-result">
                    <span class="survey-option-name">${escapeHtml(option)}</span>
                    <span class="survey-option-count">${count} (${percentage}%)</span>
                </div>
            `;
        }

        surveyHTML += `</div>`;
    }

    surveyResults.innerHTML = surveyHTML;
}

// Function to escape HTML special characters (prevent XSS)
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
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
