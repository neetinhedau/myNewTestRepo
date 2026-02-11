// ==================== */
// Navigation Active Link */
// ==================== */

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Set active link on page load
    updateActiveLink();
    
    // Add click event to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);
});

function updateActiveLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// ==================== */
// Contact Form Handler */
// ==================== */

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        contactForm.reset();
        
        // In a real application, you would send this data to a server
        console.log('Form Data:', {
            name,
            email,
            subject,
            message,
            timestamp: new Date()
        });
    });
}

function showSuccessMessage() {
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    
    btn.textContent = '✓ Message Sent Successfully!';
    btn.style.backgroundColor = '#10b981';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = '';
    }, 3000);
}

// ==================== */
// Smooth Scroll Enhancement */
// ==================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for navigation links
        if (href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const headerOffset = 60; // Height of navbar
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ==================== */
// Intersection Observer for Animations */
// ==================== */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation to resume items when they come into view
document.querySelectorAll('.resume-item').forEach(item => {
    item.style.animation = 'none';
    item.style.opacity = '0';
    observer.observe(item);
});

// ==================== */
// Add Current Year to Footer */
// ==================== */

document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('.footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.textContent = `© ${currentYear} Your Name. All rights reserved.`;
    }
});

// ==================== */
// Dark Mode Toggle (Optional Enhancement) */
// ==================== */

function initDarkMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDark) {
        document.body.style.backgroundColor = '#1f2937';
        document.body.style.color = '#f3f4f6';
    }
}

// Uncomment below to enable dark mode based on system preferences
// initDarkMode();

// ==================== */
// Add loading animation */
// ==================== */

window.addEventListener('load', function () {
    document.body.style.opacity = '1';
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        console.log('Portfolio website loaded successfully');
    });
} else {
    console.log('Portfolio website loaded successfully');
}
