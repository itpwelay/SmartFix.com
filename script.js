document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links a');
    const header = document.getElementById('header');

    // Mobile Menu Toggle
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
        });
    }

    // Close mobile menu when a link is clicked
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Sticky Header & Active Link Styling on Scroll
    const sections = document.querySelectorAll('section[id]');
    function scrollActive() {
        const scrollY = window.pageYOffset;

        if (header) {
            if (scrollY > 70) { // Adjust based on header height
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        let currentSectionId = 'hero'; // Default to hero
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            // Adjust offset for more accurate highlighting considering header height
            const sectionTop = current.offsetTop - (header ? header.offsetHeight + 20 : 90) ; 
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = current.getAttribute('id');
            }
        });
        
        // Fallback if no section is matched (e.g., very bottom of page beyond last section)
        if (scrollY + window.innerHeight >= document.body.offsetHeight - 50) { // Check if near bottom
             const lastSection = sections[sections.length -1];
             if (lastSection) currentSectionId = lastSection.getAttribute('id');
        }


        navLinkItems.forEach(link => {
            link.classList.remove('active');
            // Check if the link's href matches the current section ID
            // Or if it's the hero link and currentSectionId is still 'hero' (top of page)
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', scrollActive);
    scrollActive(); // Initial call

    // Contact Form Submission (Frontend Placeholder)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            console.log("Form Data Submitted (Frontend): ", data);
            alert("Thank you for your message, " + (data.name || 'Guest') + "! We'll be in touch soon. (This is a frontend demo.)");
            
            contactForm.reset();
        });
    }

    // Set Current Year and Founded Year in Footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    // const foundedYearSpan = document.getElementById('foundedYear');
    // if (foundedYearSpan) {
    //     foundedYearSpan.textContent = "2023"; // Set your founding year here
    // }
    // Founded year is now hardcoded in HTML with span id for potential JS use if needed later.
});
