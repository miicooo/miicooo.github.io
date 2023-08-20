// js/search.js
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    // Redirect to search-results.html with the search term as a query parameter
    window.location.href = `search-results.html?q=${searchTerm}`;
});
