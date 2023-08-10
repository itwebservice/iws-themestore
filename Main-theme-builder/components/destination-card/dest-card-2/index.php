<?php 
include '../../../generic.php';
$dest_card_2 = getDataApi('destination');
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
    <link rel="stylesheet" href="../../common_assets/css/common-style.css" />
    <link rel="stylesheet" href="../../common_assets/css/all.min.css" />
    <link rel="stylesheet" href="css/owl.css" />
    <link rel="stylesheet" href="css/style.css" />

    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
  </head>

  <body>
    <section class="dest-sec">
      <div class="container">
        <div class="about text-left">
          <div class="section-subtitle">TOP DESTINATION</div>
          <div class="section-title">Popular <span>Destination</span></div>
        </div>

        <div class="row">
          <div class="dest-sec-slider owl-carousel">
              <?php  
            foreach($dest_card_2 as $data)    
                {
            ?>
            <div class="dest-slider">
              <div class="inner-item">
                <a href="" tabindex="0">
                  <img
                    src="<?= $data['gallery_images'][4]['image_url'] ?>"
                    alt="tour"
                  />
                  <span class="entry-detail" style="background-image: url()">
                    <span class="entry-title"><?= $data['dest_name'] ?></span>
                    <span class="entry-count"><?= $data['total_packages'] ?> Tours</span>
                  </span>
                </a>
              </div>
            </div>
            <?php
                }
                ?>
          </div>
        </div>
      </div>
    </section>

    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
    <script src="js/owl-carousel.js"></script>
    <script src="js/custom.js"></script>
  </body>
</html>
