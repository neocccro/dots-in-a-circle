<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css">
    <meta charset="utf-8">
    <title>game of henks</title>
  </head>
  <body>
    <div class="menu">
      <?php
        $phppath = $_SERVER['DOCUMENT_ROOT'] . "/portfolio/php/";
        include_once($phppath . "/menu.php");
        print($phppath);
      ?>
    </div>
    <br>
    <br>
    <canvas id="canvas" width="600" height="600"></canvas>
    <input type="number" id="myNumber" value="2" min="1" step="1">
    <button onclick="start()">Try it</button>
    <script src="bs.js"></script>
  </body>
</html>
