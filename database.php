<?php

$usuario = "root";
$contraseña = "";
$link = "mysql:host=localhost;dbname=monkeydevs";

try{
    $mdb = new PDO($link, $usuario, $contraseña);
    echo("conectado!");
    echo("<br>");
}catch (PDOException $e){
    print("!Error!". $e->getMessage(). "<br/>");
    die();
}

$sql_leer = 'SELECT * FROM comentario';
$gsent = $mdb->prepare($sql_leer);
$gsent->execute();
$resultado = $gsent->fetchAll();
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <title> MonkeyOnFire </title>
    <link rel="shortcut icon" type="image/x-icon" href="#">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <?php foreach($resultado as $dato):   ?>
    <p><?php echo $dato['comentario'] ?></p>
    <br/>
    <?php endforeach  ?>

</body>