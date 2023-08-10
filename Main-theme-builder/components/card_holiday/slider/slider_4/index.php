<?php 
include '../../../../generic.php';
$slider_4 = getDataApi('package/popular');
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
    <link
      rel="stylesheet"
      href="../../../common_assets/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="../../../common_assets/css/common-style.css" />
    <link rel="stylesheet" href="../../../common_assets/css/all.min.css" />
    <link rel="stylesheet" href="css/plugin.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <section class="deals">
      <div class="container">
        <div class="section-title section-title-white text-center">
          <h2>Popular Dream Destination</h2>
          <div class="section-icon">
            <i class="flaticon-diamond"></i>
          </div>
          <p>
            Choose your ultimate dream destination for the holiday of a
            lifetime! Here's over 200 of the most incredible places to visit in
            the entire world.
          </p>
        </div>
        <div class="deals-outer">
          <div class="row deals-slider slider-button">
              <?php  
            foreach($slider_4 as $data)    
                {
            ?>
            <div class="col-lg-3">
              <div class="deals-item">
                <div class="deals-item-outer">
                  <div class="deals-image">
                    <img src="<?= $data['main_img_url']  ?>" alt="Destination_Image" />
                    <span class="deal-price"><?= $data['currency']['default_currency'].$data['total_tour_cost']?></span>
                  </div>
                  <div class="deal-content">
                    <h3><?= substr($data['package_name'],0,30);?></h3>
                    <!--<p>-->
                    <!--  Lorem ipsum dolor sit amet, consectetur adipiscing elit,-->
                    <!--  sed do eiusmod.-->
                    <!--</p>-->
                    <a href="<?= BASE_URL_B2C.$data['file_name_url'] ?>" class="btn-blue btn-red"
                      >More Details</a
                    >
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
      <div class="section-overlay"></div>
    </section>

    <!-- Link js Files -->
    <script src="../../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../../common_assets/js/jquery-3.6.0.min.js"></script>
    <script src="js/plugin.js"></script>
    <script src="js/custom.js"></script>
  </body>
</html>
