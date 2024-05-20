
        document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('.background-image img');
            let currentImageIndex = 0;

            function showNextImage() {
                // Hide all images
                images.forEach(image => {
                    image.style.display = 'none';
                });

                // Show the current image
                images[currentImageIndex].style.display = 'block';

                // Update the index to show the next image in the next iteration
                currentImageIndex = (currentImageIndex + 1) % images.length;
            }

            // Initial call to display the first image
            showNextImage();

            // Switch images every 3 seconds
            setInterval(showNextImage, 3000);
        });
