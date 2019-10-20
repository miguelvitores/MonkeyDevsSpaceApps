<?php

    $usuario = "root";
//    $contraseña = "";
    $contraseña = "root";
    $link = "mysql:host=localhost;dbname=monkeydevs";

    try{
        $mdb = new PDO($link, $usuario, $contraseña);
    }catch (PDOException $e){
        die();
    }

    $sql_leer = 'SELECT * FROM hilo';
    $gsent = $mdb->prepare($sql_leer);
    $gsent->execute();
    $hilos = $gsent->fetchAll();
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <title> MonkeyOnFire </title>
    <link rel="shortcut icon" type="image/x-icon" href="#">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../estilos/estilos.css">
</head>

<body>
    <div class="cuerpo2">
        <!-- CABECERA, TITULO Y ICONO-->
        <div class="cabecera">
            <img src="../imagenes/icono.png" title="MonkeyOnFire" />
            <h2>MonkeyOnFire</h2>
        </div>

        <div class="comentarios">
            <br>
        <div class="tituloHilosComentarios">Hilos</div>
          <div class= "comentarios_container">
                <?php foreach($hilos as $h):   ?>
              
                    <div class="gradient-box">
                        <a href="comentarios.php?id=<?php echo $h['idHilo']; ?>" target="_blank">
                        <p class="hilo">
                            <span id="titulo-hilo"><?php echo $h['titulo'] ?></span>
                            -
                            <span id="comunidad-hilo"><?php echo $h['comunidad'] ?></span>
                            -
                            <span id="fecha-hilo"><?php echo $h['fechaCreacion'] ?></span>
                        </p>
                        </a>
                    </div>
                <br>
                <?php endforeach  ?>
            </div>
        </div>


        <a href="../html/index.html"><img src="../imagenes/atras.png" width="60"/></a>


    </div>

</body>
</html>