<?php
include "connection.php";
$postdata = file_get_contents("php://input");
$data = json_decode($postdata);


//$data = json_decode(file_get_contents("php://input"));
$name = mysql_real_escape_string($data->name);
$email = mysql_real_escape_string($data->email);
$phone = mysql_real_escape_string($data->phone);
$pwd = mysql_real_escape_string($data->pwd);

/* $name = "jio";
$email = "jio@gmail.com";
$phone = "89765";
$pwd = "12";
 */

$query = "INSERT INTO users (name, email, phone, pwd) VALUES('".$name ."', '".$email ."', '".$phone ."', '".$pwd ."')";

 if (!mysql_query($query,$conn)) {
  die('Error: ' . mysql_error($conn));
}
 
/*  if ($conn->query($query) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
 */ 
 ?>