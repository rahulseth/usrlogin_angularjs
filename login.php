<?php  
include "connection.php";
   	// check username or password from database
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
	$email = strip_tags($request->email);
	$pwd = strip_tags($request->pwd);
    $email = mysql_real_escape_string($email);
    $password = mysql_real_escape_string($pwd);
	//echo $email;
	//echo "<br>" .$password;
    $result = mysql_query("SELECT id FROM users WHERE email = '" . $email . "' AND pwd = '" . $password . "'", $conn);
    if(mysql_num_rows($result) == 0) {
	    // row not found, do stuff...
	    echo "Wrong user name";
    } else {
		// Login was successfull
        $row = mysql_fetch_array($result);
		$data[] = $row;
		$data[] = array('user_exist' => TRUE);
        // Save the user ID for use later
        //$_SESSION['loginid'] = $row['id'];
        // Save the username for use later
        //$_SESSION['username'] = $email;
       //$res[] = array('id' => $row['id'],'status' => 1);
	   header('Content-type: application/json');
	echo json_encode($data);
	   
    }
	
 
?>