<?php
// Database credentials
$servername = "localhost"; // Usually localhost for local development
$username = "root";        // Default XAMPP/WAMP username
$password = "";            // Default XAMPP/WAMP password (empty)
$dbname = "1network_db";   // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully"; // Uncomment for testing connection
?>
