<!DOCTYPE html>
<html lang="es">

<head>
  <title> MonkeyOnFire </title>
  <link rel="shortcut icon" type="image/x-icon" href="#">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../estilos/estilos.css">
  <script>
    // When the user clicks on <div>, open the popup
    function popup() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    }
  </script>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <script src="../MapStuff/p5/p5.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

  <script src='https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js'></script>
  <link href='https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css' rel='stylesheet' />

  <script src="../MapStuff/mappa.js" type="text/javascript"></script>
</head>

<body>
  <div class="cuerpo">
    <!-- CABECERA, TITULO Y ICONO-->
    <div class="cabecera">
      <img src="../imagenes/icono.png" title="MonkeyOnFire" />
      <h2>MonkeyOnFire</h2>

    </div>
    <div id="slider"></div>
    <!-- EL MAPA -->

    <div id='map'></div>
    <script type="text/javascript" src="../MapStuff/sketch.js"></script>




    <div class="sos">
      <input type="button" value="S.O.S" href="#">

    </div>

    <!-- LAS OPCIONES DE LA DERECHA, EL SOS Y DEMAS CAJAS -->
    <div class="opciones">

      <div class="coordenadas">
        <h3>Tus coordenadas</h3>
        <form>
          <input type="text" placeholder="Latitud" id="input">
          <input type="text" placeholder="Longitud" id="input">
          <br />
          <input type="button" value="Ver incendios">

        </form>


      </div>

        
      <a href="hilos.php">
          <div id="foro-link">Foro</div>
        </a>


    </div>

  </div>
  <div class="popup" onclick="popup()">
    <img src="../imagenes/info.png" title="info" width="60px" />
    <span class="popuptext" id="myPopup">

      <ol>
        <li>Avise a los bomberos.</li>
        <li>Mantener la tranquilidad.</li>
        <li>Evitar inhalar el humo.</li>
        <li>Hacer caso a las autoridades.</li>
        <li>Ir en direccion contraria al viento.</li>
        <li><a target="_blank" href="mas_consejos.php">Para mas informacion pincha aqui</a></li>
      </ol>
    </span>

  </div>

  <div class="footer">
    <p class="copyright"> Open source copyright </p>
  </div>
</body>
