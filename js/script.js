// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
});

// Carousel functionality
const carousel = document.getElementById('carousel');
const slides = carousel.children.length;
let index = 0;

document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % slides;
    carousel.style.transform = `translateX(-${index * 100}%)`;
});

document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + slides) % slides;
    carousel.style.transform = `translateX(-${index * 100}%)`;
});

// Auto-update year in footer
document.getElementById('year').textContent = new Date().getFullYear();