document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let index = 0;

    nextButton.addEventListener('click', () => {
        index = (index + 1) % carousel.children.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        index = (index - 1 + carousel.children.length) % carousel.children.length;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
});
