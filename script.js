// You can add JavaScript for dynamic content, animations, or form handling here.
// For example, a simple scroll-to-top button or form validation.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example: Simple console log when the page loads
    console.log("1Network (All In One Studio) website loaded!");
});
