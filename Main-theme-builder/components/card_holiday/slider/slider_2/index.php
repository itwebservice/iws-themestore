<?php 
 include '../../../../generic.php';

$slider_2 = getDataApi('package/popular');

?>
<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link rel="stylesheet" href="css/owl.css" />
    <link rel="stylesheet" href="css/animate.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link
      rel="stylesheet"
      href="../../../common_assets/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="../../../common_assets/css/common-style.css" />
    <link rel="stylesheet" href="../../../common_assets/css/all.min.css" />
  </head>
  <body>
    <div class="weekly-offers custom-mg">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="section-heading text-center">
              <h2 class="dest-heading">Popular Destinations</h2>
              <p class="dest-sub">Explore All Corners of The World With Us</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="owl-weekly-offers owl-carousel">
                <?php  
            foreach($slider_2 as $data)    
                {
            ?>
              <div class="item">
                <div class="thumb">
                  <img src="<?= $data['main_img_url']  ?>" alt="Tour_destination" />
                  <div class="text">
                    <h4>
                      <?= $data['package_name'] ?><br /><span><i class="fa fa-users"></i><?= $data['total_nights'] ?>N/<?= $data['total_days'] ?>D</span>
                    </h4>
                    <h6><?= $data['currency']['default_currency'].$data['total_tour_cost']?><br /><span>/person</span></h6>
                    <div class="line-dec"></div>
                    <div class="main-button">
                      <a href="<?= BASE_URL_B2C.$data['file_name_url'] ?>">Make a Reservation</a>
                    </div>
                  </div>
                </div>
              </div>
              <?php
                }
                ?>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/owl-carousel.js"></script>
    <script src="js/custom.js"></script>
  </body>
</html>
