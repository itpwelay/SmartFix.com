<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1Network (All In One Studio) - Your Digital Solutions Partner</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
    <?php include 'config.php'; ?>

    <header class="header">
        <div class="container">
            <a href="#home" class="logo-text">1Network</a>
            <nav class="navbar">
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    </header>

    <section id="home" class="hero-section">
        <div class="container">
            <img src="images/cover_photo.jpg" alt="1Network Cover Photo" class="hero-cover">
            <div class="hero-content">
                <img src="images/logo.png" alt="1Network Logo" class="hero-logo">
                <h1>1Network: Your All-In-One Digital Solution Studio</h1>
                <p>Empowering Your Digital Journey with Boost, Design, and Marketing Excellence.</p>
                <a href="#services" class="btn">Explore Our Services</a>
            </div>
        </div>
    </section>

    <section id="about" class="about-section common-section">
        <div class="container">
            <h2>About <span>1Network</span> (All In One Studio)</h2>
            <p class="section-description">Founded in **2023** by **Saw Eh Pwe Soe**, 1Network is dedicated to providing comprehensive digital services tailored to your needs. We believe in delivering excellence and innovation in every project, helping businesses and individuals thrive in the digital landscape.</p>
            <div class="about-details">
                <div class="detail-item">
                    <i class="fas fa-handshake"></i>
                    <h3>Our Mission</h3>
                    <p>To empower businesses and individuals with cutting-edge digital solutions, fostering growth and success.</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-eye"></i>
                    <h3>Our Vision</h3>
                    <p>To be the leading all-in-one digital studio, recognized for innovation, quality, and client satisfaction.</p>
                </div>
                <div class="detail-item">
                    <i class="fas fa-users"></i>
                    <h3>Our Team</h3>
                    <p>A dedicated team of experts passionate about delivering results and exceeding expectations.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="services-section common-section">
        <div class="container">
            <h2>Our <span>Services</span></h2>
            <p class="section-description">Discover the wide range of professional services offered by 1Network to elevate your digital presence.</p>
            <div class="services-grid">
                <?php
                $sql = "SELECT title, description, icon_class FROM services ORDER BY id";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    // Output data of each row
                    while($row = $result->fetch_assoc()) {
                        echo '<div class="service-item">';
                        echo '<i class="' . $row["icon_class"] . '"></i>';
                        echo '<h3>' . $row["title"] . '</h3>';
                        echo '<p>' . $row["description"] . '</p>';
                        echo '</div>';
                    }
                } else {
                    echo "<p>No services available yet.</p>";
                }
                ?>
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="container">
            <h2>Ready to Transform Your Digital Presence?</h2>
            <p>Let's discuss how 1Network can help you achieve your goals.</p>
            <a href="#contact" class="btn btn-primary">Get a Free Consultation</a>
        </div>
    </section>

    <section id="contact" class="contact-section common-section">
        <div class="container">
            <h2>Get In <span>Touch</span></h2>
            <p class="section-description">We'd love to hear from you! Reach out to us through the following channels.</p>

            <div class="contact-grid">
                <div class="contact-info">
                    <h3>Contact Information</h3>
                    <p><i class="fas fa-phone-alt"></i> Phone: <a href="tel:+959967510401">+959967510401</a></p>
                    <p><i class="fas fa-envelope"></i> Email: <a href="mailto:itpwelay@gmail.com">itpwelay@gmail.com</a></p>
                    <p><i class="fas fa-map-marker-alt"></i> Location: Yangon, Myanmar</p>

                    <h3>Follow Us</h3>
                    <div class="social-links">
                        <a href="https://www.facebook.com/your-facebook-page" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.tiktok.com/@your-tiktok-profile" target="_blank" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
                        <a href="https://www.youtube.com/your-youtube-channel" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                        <a href="https://github.com/your-github-profile" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
                    </div>
                </div>

                <div class="contact-form">
                    <h3>Send Us a Message</h3>
                    <form action="send_message.php" method="POST">
                        <div class="form-group">
                            <label for="name">Your Name:</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Your Email:</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <p>&copy; <?php echo date("Y"); ?> 1Network (All In One Studio). All Rights Reserved.</p>
            <p>Founded by Saw Eh Pwe Soe in 2023</p>
        </div>
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
