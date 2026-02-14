/* Start of Slider Logic */
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const intervalTime = 4000;

    function updateSlider(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
        });
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider(currentIndex);
    }

    let slideTimer = setInterval(nextSlide, intervalTime);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideTimer);
            currentIndex = index;
            updateSlider(index);
            slideTimer = setInterval(nextSlide, intervalTime);
        });
    });
});
