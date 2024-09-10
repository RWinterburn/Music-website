document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    const images = document.querySelectorAll('.gallery-container img');

    images.forEach(img => {
        img.addEventListener('click', function() {
            // Remove 'enlarged' class from any image that has it
            images.forEach(image => image.classList.remove('enlarged'));

            // Add 'enlarged' class to the clicked image
            this.classList.add('enlarged');
        });
    });

    // Optionally, add a click event listener on the body to remove 'enlarged' class when clicking outside the image
    document.body.addEventListener('click', function(event) {
        if (!event.target.matches('.gallery-container img')) {
            images.forEach(img => img.classList.remove('enlarged'));
        }
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
