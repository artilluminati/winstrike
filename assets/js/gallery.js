// Get all the necessary elements
const galleryImages = document.querySelectorAll('.gallery-image');
const leftArrowButton = document.querySelector('.gallery-arrow-left button');
const rightArrowButton = document.querySelector('.gallery-arrow-right button');
const pageInsdicators = document.querySelectorAll('.indicator-page');

// Initialize the current image index
let currentImageIndex = 0;

// Показывает текущее фото и индикатор
function showCurrentImage() {
    galleryImages.forEach((image, index) => {
        if (index === currentImageIndex) {
            image.classList.add('show');
            pageInsdicators[index].classList.add('selected');
        } else {
            image.classList.remove('show');
            pageInsdicators[index].classList.remove('selected');
        }
    });
}

// Event listener for left arrow button
leftArrowButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    showCurrentImage();
});

// Event listener for right arrow button
rightArrowButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    showCurrentImage();
});
