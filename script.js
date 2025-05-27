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

        // Sticky header logic (optional, if you want it to change style on scroll)
        if (header) {
            if (scrollY > 80) { // Adjust this value as needed
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        let currentSectionId = '';
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100; // Adjust offset if needed
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                currentSectionId = current.getAttribute('id');
            }
        });

        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.classList.add('active');
            }
        });
        // Ensure home is active if at top and no other section is matched
        if (currentSectionId === '' && scrollY < sections[0].offsetTop -100) {
             document.querySelector('.nav-links a[href="#hero"]').classList.add('active');
        }
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
            alert("Thank you for your message, " + data.name + "! We'll be in touch soon. (This is a frontend demo.)");
            
            contactForm.reset();
            // Here, you would typically send 'data' to a backend server using fetch() or XMLHttpRequest.
            // Example:
            // fetch('/your-backend-endpoint', { method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'} })
            // .then(response => response.json())
            // .then(result => console.log('Success:', result))
            // .catch(error => console.error('Error:', error));
        });
    }

    // Set Current Year in Footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
