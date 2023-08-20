// js/search-results.js
document.addEventListener('DOMContentLoaded', function() {
    const searchResultsContainer = document.getElementById('search-results');
    const searchParams = new URLSearchParams(window.location.search);
    const searchTerm = searchParams.get('q'); // Get the search term from the URL query parameter

    // Retrieve search results based on the search term
    const movieLinks = document.querySelectorAll('.category a');
    let matchingMovies = [];

    movieLinks.forEach(link => {
        const title = link.querySelector('h2').textContent.toLowerCase();
        const description = link.querySelector('p').textContent.toLowerCase();
        const movieName = link.getAttribute('data-movie-name').toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm) || movieName.includes(searchTerm)) {
            matchingMovies.push(link.cloneNode(true));
        }
    });

    // Display search results
    if (matchingMovies.length > 0) {
        matchingMovies.forEach(movie => {
            searchResultsContainer.appendChild(movie);
        });
    } else {
        searchResultsContainer.innerHTML = '<p>No matching movies found.</p>';
    }
});
