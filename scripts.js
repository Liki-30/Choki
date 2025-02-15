document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.style.transition = 'background-color 0.5s ease-in-out';
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#333';
        } else {
            header.style.backgroundColor = 'black';
        }
    });

    const images = document.querySelectorAll('.overlay-image');
    images.forEach((image) => {
        image.style.transition = 'transform 0.5s ease-in-out';
        image.addEventListener('mouseover', function() {
            image.style.transform = 'scale(1.1)';
        });
        image.addEventListener('mouseout', function() {
            image.style.transform = 'scale(1)';
        });
    });
});
