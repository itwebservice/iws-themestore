<?php 
include '../../../../generic.php';
$slider_3 = getDataApi('package/popular');
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
    <link rel="stylesheet" href="../../../common_assets/css/common-style.css">
    <link rel="stylesheet" href="../../../common_assets/css/all.min.css" />
    <link rel="stylesheet" href="css/owl.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="tour-offer custom-mg">
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
          <div class="container">
          <div class="tour-offers-slider owl-carousel">
              <?php  
            foreach($slider_3 as $data)    
                {
            ?>
    <div
      class="babe_items babe_items_1 column-item"
      style="display: inline-block"
    >
      <div class="babe_all_items_item_inner">
        <div class="item_img">
          <span class="item-label price_discount">Feature</span>
          <a class="item-thumb" href="" tabindex="-1"
            ><img
              src="<?= $data['main_img_url']  ?>"
              alt="Tour_image"
          /></a>
        </div>
        <div class="item_text">
          <div class="item-meta">
            <div class="item-meta-left">
              <span class="item-days item-meta-value"
                ><i class="fa fa-calendar"></i><span><?= $data['total_days']  ?> Days</span></span
              ><span class="item-user item-meta-value"
                ><i class="fa fa-user"></i><span>60</span></span
              >
            </div>
          </div>
          <div class="item_title">
            <a href="" tabindex="-1"><?= substr($data['package_name'],0,30);?></a>
          </div>
          <div class="item-location">
            <i class="fa fa-location-dot"></i><span><?=$data['destination']['dest_name']  ?></span>
          </div>
          <div class="item-bottom">
            <div class="item_info_price">
              <label>From </label>
              <span class="item_info_price_new"
                ><span class="currency_amount" data-amount="93.5"
                  ><span class="currency_symbol"><?= $data['currency']['default_currency'] ?></span><?= $data['total_tour_cost']?></span
                ></span
              >
            </div>
            <a class="read-more-item" href="<?= BASE_URL_B2C.$data['file_name_url'] ?>" tabindex="-1"
              >Explore <i class="fa fa-arrow-right"></i
            ></a>
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
    </body>
    <!-- Link js Files -->
    <script src="../../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../../common_assets/js/jquery-3.6.0.min.js"></script>
    <script src="js/owl-carousel.js"></script>
    <script src="js/custom.js"></script>
  </body>
</html>
