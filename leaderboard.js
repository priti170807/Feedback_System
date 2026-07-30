// Check if user is logged in
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if (!currentUser) {
    // Redirect to login if not logged in
    window.location.href = 'login.html';
}

// Get all users from localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Filter users who have taken the quiz and sort by best score (descending)
const leaderboard = users
    .filter(user => user.bestScore > 0)
    .sort((a, b) => b.bestScore - a.bestScore);

// Display leaderboard
const leaderboardBody = document.getElementById('leaderboardBody');
const emptyMessage = document.getElementById('emptyMessage');

if (leaderboard.length === 0) {
    // Show empty message if no scores
    emptyMessage.style.display = 'block';
} else {
    // Hide empty message
    emptyMessage.style.display = 'none';

    // Create leaderboard entries
    leaderboard.forEach((user, index) => {
        const entry = document.createElement('div');
        entry.className = 'leaderboard-entry';

        // Highlight current user's entry
        if (user.email === currentUser.email) {
            entry.classList.add('highlight');
        }

        // Create entry HTML
        entry.innerHTML = `
            <div class="col-rank">#${index + 1}</div>
            <div class="col-name">${user.name}</div>
            <div class="col-score">${user.bestScore}/5</div>
        `;

        leaderboardBody.appendChild(entry);
    });
}
