// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Auto-rotate carousel
setInterval(() => {
    changeSlide(1);
}, 4000);

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
