
        document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('.background-image img');
            let currentImageIndex = 0;

            function showNextImage() {
           
                images.forEach(image => {
                    image.style.display = 'none';
                });

               
                images[currentImageIndex].style.display = 'block';

               
                currentImageIndex = (currentImageIndex + 1) % images.length;
            }

            
            showNextImage();

            
            setInterval(showNextImage, 3000);
        });
