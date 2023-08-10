<?php 
 include '../../../generic.php';

$banner_2 = getDataApi('banner');

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Link Css Files -->
    <link rel="stylesheet" href="../../common_assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../common_assets/css/all.min.css" />
    <link rel="stylesheet" href="css/slider-style.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>

  <body>
    <div id="content">
      <div id="slider">
           <?php  
            foreach($banner_2 as $key=>$data)    
                {
            ?>
        <img class="bg-img"
          src="<?= BASE_URL_MAIN.$data ?>"
          alt="Interational Tours"
          data-url="#<?= $key ?>"
          style="filter:brightness(50%);"
          
        />
        <?php } ?>
        <!--<img-->
        <!--  src="images/banner-02.jpg"-->
        <!--  alt="Dream Destinations"-->
        <!--  data-url="#2"-->
        <!--/>-->
        <!--<img src="images/banner-03.jpg" alt="Cost Effective" data-url="#3" />-->
        <!--<img-->
        <!--  src="images/banner-04.jpg"-->
        <!--  alt="Honeymoon Locations"-->
        <!--  data-url="#4"-->
        <!--/>-->
      </div>
    </div>

    <!-- Link js Files -->
    <script src="js/classie.js"></script>
    <script src="js/TweenMax.min.js"></script>
    <script src="js/slider-top.js"></script>
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
  </body>
</html>
