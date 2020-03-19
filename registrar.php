<?php
    header('Content-Type: application/json');

    include("conexion.php");

    $obj = new Conexion;
    $response = array();

    $json = file_get_contents('php://input');
    $jsonObj = json_decode($json, true);

    $usuario = $jsonObj["pUsuario"];
    $pass = $jsonObj["pPass"];
    $correo = $jsonObj["pCorreo"];
    $json = file_get_contents('php://input');



    $consulta = "INSERT INTO usuario(nombre, pass, correo)
                VALUES  ('" . $usuario ."',
                         '" . $pass ."',
			'" . $correo ."';

    $res = $obj->registrarUsuario($consulta);

    if($res == 1){
       // $response['status'] = 1;
         $response = 1;
    }else{
        //$response['status'] = 0;
         $response = 0;
    }

    echo json_encode($response, JSON_FORCE_OBJECT);
?> 