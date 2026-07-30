// Check if user is logged in
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if (!currentUser) {
    // Redirect to login if not logged in
    window.location.href = 'login.html';
} else {
    // Display user information
    document.getElementById('studentName').textContent = currentUser.name;
    document.getElementById('quizzesTaken').textContent = currentUser.quizzesTaken || 0;
    document.getElementById('bestScore').textContent = (currentUser.bestScore || 0) + '/5';
}

// Handle logout
document.getElementById('logoutBtn').addEventListener('click', function() {
    // Confirm logout
    if (confirm('Are you sure you want to logout?')) {
        // Remove current user from localStorage
        localStorage.removeItem('currentUser');

        // Redirect to index page
        window.location.href = 'index.html';
    }
});
