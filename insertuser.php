<?php
include "connection.php";
echo "jjjooo";
$data = json_decode(file_get_contents("php://input"));
$name = mysqli_real_escape_string($data->name);
$email = mysqli_real_escape_string($data->email);
$phone = mysqli_real_escape_string($data->phone);
$pwd = mysqli_real_escape_string($data->pwd);

$query = "INSERT INTO user VALUES($name,email,$phone,$pwd)";
if (!mysqli_query($conn, $query)) {
  die('Error: ' . mysqli_error($con));
}
?>