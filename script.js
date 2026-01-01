// LUXURY INTERACTION SCRIPT

window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    // Change nav background only on Home page if it's the hero section
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        // If it's the home page, remove scrolled class at the top
        if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
            nav.classList.remove('scrolled');
        }
    }
});

// Smooth Reveal Animation for Service Cards
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .gallery-item').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

// Log for luxury brand confirmation
console.log("Prity' Makeup Artist Website - Excellence Loaded.");
