<?php
include 'DBConfig.php'; // Importing DBConfig.php file.
 // Creating connection.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 // Populate name from JSON $obj array and store into $name.
$nombre = $obj['nombre'];
// Populate email from JSON $obj array and store into $email.
$pass = $obj['pass'];
 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "insert into usuario (nombre,pass) values ('$nombre','$pass')";
 if(mysqli_query($con,$Sql_Query)){
 // If the record inserted successfully then show the message.
$MSG = 'Data Inserted Successfully into MySQL Database' ;
$json = json_encode($MSG); // Converting the message into JSON format.
echo $json ; // Echo the message.
 }
 else{
 echo 'Try Again';
}
 mysqli_close($con);
?>