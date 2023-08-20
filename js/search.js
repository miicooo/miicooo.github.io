// search.js
console.log('Search Term:', searchTerm);
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const movieLinks = document.querySelectorAll('.category a');
    const searchResultsContainer = document.getElementById('search-results');
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
        searchResultsContainer.innerHTML = '';
        matchingMovies.forEach(movie => {
            searchResultsContainer.appendChild(movie);
        });
    } else {
        searchResultsContainer.innerHTML = '<p>No matching movies found.</p>';
    }
});
