<?php
 $url = $_GET['url'];
 $urlCom = $_GET['url_com'];
  include 'generic.php';
 ?>
<html>
    <head>
      <!-- Link Css Files -->
    <link rel="stylesheet" href="components/common_assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="components/common_assets/css/all.min.css" />
    <link rel="stylesheet" href="components/common_assets/css/common-style.css" />
    <script src="components/common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="components/common_assets/js/jquery-3.6.0.min.js"></script>
    </head>
    <body>
        <?php
        
        @include($url) ?>
    </body>
     
</html>