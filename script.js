// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const carouselDots = document.querySelectorAll('.carousel-dot');
const totalSlides = slides.length;

function updateCarousel() {
    slides.forEach((s, i) => {
        s.classList.toggle('active', i === currentSlide);
    });
    carouselDots.forEach((d, i) => {
        d.classList.toggle('active', i === currentSlide);
    });
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// Auto-rotate carousel
let autoRotate = setInterval(() => changeSlide(1), 5000);

// Pause on hover
const carouselContainer = document.querySelector('.carousel-container');
if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => clearInterval(autoRotate));
    carouselContainer.addEventListener('mouseleave', () => {
        autoRotate = setInterval(() => changeSlide(1), 5000);
    });
}

// Sticky header behavior
const vendorHeader = document.getElementById('vendorHeader');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        vendorHeader.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        vendorHeader.style.boxShadow = 'none';
    }
});

// Sidebar dots interaction
const dots = document.querySelectorAll('.sidebar-dots .dot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
    });
});

// Vendor nav active state
const navItems = document.querySelectorAll('.adobe-nav-item');
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        navItems.forEach(n => n.classList.remove('active'));
        item.classList.add('active');
    });
});
