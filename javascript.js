
    <!-- JavaScript function to catering-->
function showGallery(galleryId) {
            const africanGallery = document.getElementById('africanGallery');
            const modernGallery = document.getElementById('modernGallery');

            if (galleryId === 'african-cusions') {
                africanGallery.style.display = 'block';
                modernGallery.style.display = 'none';
            } else if (galleryId === 'modern-cusions') {
                africanGallery.style.display = 'none';
                modernGallery.style.display = 'block';
            }
        }
