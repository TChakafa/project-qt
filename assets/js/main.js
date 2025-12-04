// assets/js/main.js

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const currentYear = document.getElementById('currentYear');
const collaborationForm = document.getElementById('collaborationForm');
const contactForm = document.getElementById('contactForm');

// Set current year in footer
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Mobile menu toggle
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active')
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking on a link
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const navbar = document.querySelector('.navbar');
        if (!navbar.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}

// Form submission handling
if (collaborationForm) {
    collaborationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(collaborationForm);
        const name = formData.get('name') || 'Not provided';
        const email = formData.get('email') || 'Not provided';
        const phone = formData.get('phone') || 'Not provided';
        const expertise = formData.get('expertise') || 'Not provided';
        const message = formData.get('message') || 'Not provided';
        
        // In a real application, you would send this data to a server
        // For this demo, we'll just show an alert
        alert(`Thank you for expressing interest in collaboration!\n\nWe've received your information and will contact you soon.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nArea of Expertise: ${expertise}`);
        
        // Reset form
        collaborationForm.reset();
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name') || 'Not provided';
        const email = formData.get('email') || 'Not provided';
        const phone = formData.get('phone') || 'Not provided';
        const service = formData.get('service') || 'Not provided';
        const message = formData.get('message') || 'Not provided';
        
        // In a real application, you would send this data to a server
        // For this demo, we'll just show an alert
        alert(`Thank you for contacting us!\n\nWe've received your message and will respond within 24 hours.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService Interest: ${service}`);
        
        // Reset form
        contactForm.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});