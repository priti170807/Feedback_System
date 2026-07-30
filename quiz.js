// Check if user is logged in
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if (!currentUser) {
    // Redirect to login if not logged in
    window.location.href = 'login.html';
}

// Correct answers for the quiz
const correctAnswers = {
    q1: 'C',
    q2: 'B',
    q3: 'B',
    q4: 'B',
    q5: 'D'
};

// Handle quiz form submission
document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get user answers
    const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value,
        q4: document.querySelector('input[name="q4"]:checked').value,
        q5: document.querySelector('input[name="q5"]:checked').value
    };

    // Calculate score
    let score = 0;
    for (let question in correctAnswers) {
        if (userAnswers[question] === correctAnswers[question]) {
            score++;
        }
    }

    // Update user data
    currentUser.quizzesTaken = (currentUser.quizzesTaken || 0) + 1;

    // Update best score if current score is higher
    if (score > (currentUser.bestScore || 0)) {
        currentUser.bestScore = score;
    }

    // Add score to user's scores array
    if (!currentUser.scores) {
        currentUser.scores = [];
    }
    currentUser.scores.push({
        score: score,
        date: new Date().toLocaleString()
    });

    // Update localStorage with new user data
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    // Update users array in localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Save score to session storage for result page
    sessionStorage.setItem('lastScore', score);

    // Redirect to results page
    window.location.href = 'result.html';
});
