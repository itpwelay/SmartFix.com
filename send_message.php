<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = trim($_POST["message"]);

    // Validate data (more robust validation should be done)
    if (empty($name) || empty($email) || empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Handle error - redirect back or show an error message
        header("Location: index.php?status=error_validation#contact");
        exit;
    }

    // Set recipient email
    $recipient = "itpwelay@gmail.com"; // Your actual email address

    // Build email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Subject: $subject\n";
    $email_content .= "Message:\n$message\n";

    // Build email headers
    $email_headers = "From: $name <$email>";

    // Send the email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Success - redirect with success message
        header("Location: index.php?status=success#contact");
    } else {
        // Failure - redirect with error message
        header("Location: index.php?status=error_send#contact");
    }

} else {
    // Not a POST request, redirect to home
    header("Location: index.php");
}
exit;
?>

