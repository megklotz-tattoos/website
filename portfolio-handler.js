document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.instagram-gallery img');
    const galleryWrapper = document.querySelector('.instagram-gallery');
    let currentIndex = 0;

    // Function to change image selection and scrolling
    window.changeImage = function(direction) {
        // Remove the selected class from the current image
        images[currentIndex].classList.remove('selected');

        // Update the currentIndex
        currentIndex += direction;

        // Handle wrapping around when reaching the start or end of the gallery
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        // Add the selected class to the new image
        images[currentIndex].classList.add('selected');

        // Scroll the gallery to the selected image
        galleryWrapper.style.transform = `translateX(${-currentIndex * (images[0].offsetWidth + 10)}px)`;
    };

    // Set the first image as selected initially
    images[currentIndex].classList.add('selected');
});

