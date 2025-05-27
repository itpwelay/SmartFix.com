document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links li a'); // Get all nav links

    // Toggle mobile menu
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    if (navLinkItems && navLinks) {
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // Optional: Contact form submission handling (frontend only - prevent default and log)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents the default form submission
            
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            console.log("Form Data Submitted: ", data);
            alert("Thank you for your message! We will get back to you soon. (This is a demo - form data logged to console.)");
            
            contactForm.reset(); // Clears the form fields
        });
    }

    // Active link highlighting on scroll and click
    const sections = document.querySelectorAll('section[id]');
    
    function setActiveLink() {
        let currentSection = '';
        // Adjust scrollY position check to be slightly above the section top
        // to trigger highlighting a bit earlier, useful for fixed headers.
        const scrollPosition = window.pageYOffset + (window.innerHeight / 3); 

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    window.addEventListener('load', setActiveLink); // Set active link on page load

    // Also handle click to set active immediately
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinkItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            // Smooth scroll is handled by CSS `scroll-behavior: smooth;`
            // If mobile menu is open, close it
             if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});
