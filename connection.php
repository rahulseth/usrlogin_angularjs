<?php
$servername = "localhost";
$username = "angular";
$password = "angular";
$database = "angulardb";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

?>