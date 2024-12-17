const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;
const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');

let currentSlide = 0;

// Fungsi menampilkan slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        indicators[i].classList.remove('active');
    });
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

// Event listener untuk tombol prev (sebelumnya)
prevBtn.addEventListener('click', () => {
    currentSlide = currentSlide <= 0 ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
});

// Event listener untuk tombol next (berikutnya)
nextBtn.addEventListener('click', () => {
    currentSlide = currentSlide >= slides.length - 1 ? 0 : currentSlide + 1;
    showSlide(currentSlide);
});

// Menangani klik pada indikator (dots)
indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        const index = parseInt(indicator.getAttribute('data-slide'));
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Inisialisasi slide pertama
showSlide(currentSlide);

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Hamburger menu untuk navigasi di perangkat mobile
hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});
