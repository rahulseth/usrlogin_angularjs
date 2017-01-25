<?php
$servername = "localhost";
$username = "angular";
$password = "angular";
$database = "angulardb";

// Create connection
//$conn = new mysql($servername, $username, $password, $database);
$conn = mysql_connect($servername, $username, $password) or die('hhh');

/* // Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
 */
mysql_select_db($database);
?>