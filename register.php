<?php include 'conexion.php';

    $json = file_get_contents('php://input');

    $obj = json_decode($json,true);

    $usuario = $obj['usuario'];

    $pass = $obj['pass'];

    $add = $mysqli->query("insert into usuario (nombre,pass) values('$usuario','$pass')");

    if($add){
        echo json_encode('User Registered Successfully');
    }else{
        echo json_encode('check internet connection');
    }

?>