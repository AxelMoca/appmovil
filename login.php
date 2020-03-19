<?php

/*    include("conexion.php");

    $obj = new Conexion;
    $response = array();

    $usuario = $_GET["user"];
    $contrasena = $_GET["pass"];

    $res = $obj->buscarUsuario($usuario, $contrasena);
	
    if($res == 1){
        $response['status'] = 1;
    }else{
        $response['status'] = 0;
    }
	
    echo json_encode($response);
*/
    header('Content-Type: application/json');

    include("conexion.php");

    $obj = new Conexion;
    $response = array();

    $json = file_get_contents('php://input');
    $jsonObj = json_decode($json, true);

    $usuario = $jsonObj["pUsuario"];
    $pass = $jsonObj["pPass"];
//$usuario="andoni";
//    $pass="andoni";
    $json = file_get_contents('php://input');



 //   $consulta = "INSERT INTO usuario(nombre, pass)
  //              VALUES  ('" . $usuario ."',
  //                       '" . $pass ."');";

  $res = $obj->buscarUsuario($usuario,$pass);

    if($res == 1){
        $response = 1;
    }else{
        $response = 0;
    }

    echo json_encode($response, JSON_FORCE_OBJECT);