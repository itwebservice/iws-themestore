<?php 
include '../../../generic.php';
$dest_card_1 = getDataApi('destination');
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
        <div class="dest-slider owl-carousel">
            <?php  
            foreach($dest_card_1 as $data)    
                {
            ?>
            
          <div class="item">
            <div class="position-re o-hidden">
              <img
                decoding="async"
                src="<?= $data['gallery_images'][4]['image_url'] ?>"
                alt="Dest-tour"
              /><span class="category"><a href=""><?= $data['total_packages'] ?>Tours</a></span>
            </div>
            <div class="con">
              <h5>
                <a href=""><i class="fa fa-location-dot"></i> <?= $data['dest_name'] ?></a>
              </h5>
              <div class="line"></div>
              <div class="row facilities">
                <div class="col col-md-8"><p><?= $data['total_packages'] ?> Tour Packages</p></div>
                <div class="col col-md-4 text-right">
                  <div class="permalink">
                    <a href="">Explore <i class="fa fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <?php
                }
                ?>
      </div>
    </section>

    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
    <script src="js/owl-carousel.js"></script>
    <script src="js/custom.js"></script>
  </body>
</html>
