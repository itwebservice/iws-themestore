<?php 
 include '../../../generic.php';

$banner_5 = getDataApi('banner');

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
    <link rel="stylesheet" href="../../common_assets/css/common-style.css" />
    <link rel="stylesheet" href="css/owl.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <!-- slider_area_start -->
    <div class="slider_area">
      <div class="slider_active owl-carousel">
          <?php  
            foreach($banner_5 as $data)    
                {
            ?>
        <div
          class="d-flex align-items-center justify-content-center"
        >
            <img src="<?= BASE_URL_MAIN.$data ?>" class="single_slider">
          
        </div>
        <?php } ?>
      </div>
    </div>
    <!-- slider_area_end -->

    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
    <script src="js/owl-carousel.js"></script>
    <script src="js/custom.js"></script>
  </body>
</html>
