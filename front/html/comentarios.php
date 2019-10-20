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
    $id = $_GET['id'];


    $sql_leer = 'SELECT * FROM comentario where Hilo_idHilo = :id';
    $gsent = $mdb->prepare($sql_leer);
    $gsent->bindParam(':id', $id, PDO::PARAM_INT);
    $gsent->execute();
    $comentarios = $gsent->fetchAll();
    $sql_leer = 'SELECT * FROM hilo where idHilo = :id';
    $gsent = $mdb->prepare($sql_leer);
    $gsent->bindParam(':id', $id, PDO::PARAM_INT);
    $gsent->execute();
    $hilo = $gsent->fetch();
?>
<!DOCTYPE html>
<html lang="es">
<?php
    if( $_SERVER['REQUEST_METHOD']=='GET') {
        // $c = $usuario->getLoggedUser();
?>
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
        <div class="tituloHilosComentarios">Comentarios de "<?php echo($hilo['titulo']) ?>"</div>
          <div class= "comentarios_container">
            <?php foreach($comentarios as $c):   ?>
                <div class="gradient-box">
                    <p class="comentario">
                        <span id="titulo-hilo"><?php echo $c['texto'] ?></span>
                        -
                        <span id="fecha-hilo"><?php echo $c['fechaCreacion'] ?></span>
                    </p>
                </div>
              <br>
            <?php endforeach  ?>
          </div>
          <form class="input_comentario" method="post">
            <textarea placeholder="Introduce el texto. max 450 caracteres" name="comentarioIntroducido" style="resize: none;" maxlength="250"></textarea>
            <br>
            <input type="submit" value="Enviar">
          </form>
            
        </div>


        <a href="../html/index.html"><img src="../imagenes/atras.png" width="60"/></a>


    </div>

</body>
<?php

    }else if( $_SERVER['REQUEST_METHOD']=='POST') {
        if(isset($_POST['comentarioIntroducido'])){
            $sql_insertar = 'INSERT INTO comentario(texto, Hilo_idHilo) VALUES(?,?)';
            $sentencia_insertar = $mdb->prepare($sql_insertar);
            $sentencia_insertar->execute(array($_POST['comentarioIntroducido'], $id));
        }
        header('Location: ?id='.$id);
        exit;
    }
?>