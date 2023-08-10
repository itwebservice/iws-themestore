<?php 
 include '../../../../generic.php';

$slider_1 = getDataApi('package/popular');

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/owl.carousel.min.css" />
    <link rel="stylesheet" href="css/owl.theme.default.min.css" />
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/jquery.fancybox.min.css" />
  </head>
  <body>
    <div class="untree_co-section cust-mg">
      <div class="container">
        <div class="row text-center justify-content-center mb-5">
          <div class="col-lg-7">
            <h2 class="section-title text-center">Popular Destination</h2>
            <p class="dest-subtitle">
              We are committed to help traveler to get best deals where they
              want to go
            </p>
          </div>
        </div>

        <div class="owl-carousel owl-3-slider">
            <?php  
            foreach($slider_1 as $data)    
                {
            ?>
          <div class="item">
            <a
              class="media-thumb"
              href="<?= BASE_URL_B2C.$data['file_name_url'] ?>"
              
            >
              <div class="media-text">
                <h3><?= $data['package_name']  ?></h3>
                <span class="location"><?=$data['destination']['dest_name']  ?></span>
              </div>
              <img
                src="<?= $data['main_img_url']  ?>"
                alt="Image"
                class="img-fluid"
              />
            </a>
          </div>
            <?php
                }
                ?>
          
        </div>
      </div>
    </div>
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/custom.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.fancybox.min.js"></script>
    <script src="js/aos.js"></script>
  </body>
</html>
