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
<script>
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
</script>
