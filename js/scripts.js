let slideIndex = 0;
showSlides();

function showSlides() {
   const slides = document.getElementsByClassName("slide");
   
   for (let i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }

   slideIndex++;
   if (slideIndex > slides.length) {
       slideIndex = 1;
   }

   slides[slideIndex - 1].style.display = "block";
   setTimeout(showSlides, 5000); // Change slide every 5 seconds
}
// Existing JavaScript code...

// Add the search functionality
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

// Continue with your existing JavaScript code...

