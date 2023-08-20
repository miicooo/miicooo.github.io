// File: js/search.js
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const movieLinks = document.querySelectorAll('.category a');

    movieLinks.forEach(link => {
        const title = link.querySelector('h2').textContent.toLowerCase();
        const description = link.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    });
});
