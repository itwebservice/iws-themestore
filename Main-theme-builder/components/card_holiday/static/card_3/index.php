
<?php 
 include '../../../../generic.php';

$static_3 = getDataApi('package/popular');

?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
    <script src="js/bootstrap.bundle.min.js"></script>
  </head>
  <body>
    <section class="destinations-area cust-mg">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="menu-content pb-40 col-lg-8">
            <div class="title text-center">
              <h2 class="section-title">Our Popular Destinations</h2>
              <p class="dest-sub">
                We all live in an age that belongs to the young at heart. Life
                that is becoming extremely fast, day to.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
            <?php  
            foreach($static_3 as $data)    
                {
            ?>
          <div class="col-lg-4">
            <div class="single-destinations">
              <div class="thumb">
                <img src="<?= $data['main_img_url']  ?>" alt="" />
              </div>
              <div class="details">
                <h4><?= $data['package_name']  ?></h4>
                <p><?=$data['destination']['dest_name']  ?></p>
                <ul class="package-list">
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Duration</span>
                    <span><?= $data['total_days']  ?> days and <?= $data['total_nights']  ?> nights</span>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Date</span>
                    <span>18.04.2022</span>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Airport</span>
                    <span>Changi</span>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Extras</span>
                    <span>All Inclusive</span>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Price per person</span>
                    <a href="<?= BASE_URL_B2C.$data['file_name_url'] ?>" class="price-btn"><?= $data['currency']['default_currency'].$data['total_tour_cost']  ?></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <?php } ?>

          <!--<div class="col-lg-4">-->
          <!--  <div class="single-destinations">-->
          <!--    <div class="thumb">-->
          <!--      <img src="images/d2.jpg" alt="" />-->
          <!--    </div>-->
          <!--    <div class="details">-->
          <!--      <h4>New York City Life</h4>-->
          <!--      <p>United states of America</p>-->
          <!--      <ul class="package-list">-->
          <!--        <li class="d-flex justify-content-between align-items-center">-->
          <!--          <span>Duration</span>-->
          <!--          <span>06 days and 7 nights</span>-->
          <!--        </li>-->
          <!--        <li class="d-flex justify-content-between align-items-center">-->
          <!--          <span>Date</span>-->
          <!--          <span>13.05.2022</span>-->
          <!--        </li>-->
          <!--        <li class="d-flex justify-content-between align-items-center">-->
          <!--          <span>Airport</span>-->
          <!--          <span>Changi</span>-->
          <!--        </li>-->
          <!--        <li class="d-flex justify-content-between align-items-center">-->
          <!--          <span>Extras</span>-->
          <!--          <span>All Inclusive</span>-->
          <!--        </li>-->
          <!--        <li class="d-flex justify-content-between align-items-center">-->
          <!--          <span>Price per person</span>-->
          <!--          <a href="" class="price-btn">$250</a>-->
          <!--        </li>-->
          <!--      </ul>-->
          <!--    </div>-->
          <!--  </div>-->
          <!--</div>-->

          <!--<div class="col-lg-4">-->
          <!--  <div class="single-destinations">-->
          <!--    <div class="thumb">-->
          <!--      <img src="images/d3.jpg" alt="" />-->
          <!--    </div>-->
          <!--    <div class="details">-->
          <!--      <h4>Holiday Sea Beach Blue</h4>-->
          <!--      <p>United states of America</p>-->
          <!--      <ul class="package-list">-->
          <!--        <li class="d-flex justify-content-between align-items-center">-->
          <!--          <span>Duration</span>-->
          <!--          <span>06 days and 7 nights</span>-->
          <!--        </li>-->
          <!--        <li class="d-flex justify-content-between align-items-center">-->
          <!--          <span>Date</span>-->
          <!--          <span>22.06.2022</span>-->
          <!--        </li>-->
          <!--        <li class="d-flex justify-content-between align-items-center">-->
          <!--          <span>Airport</span>-->
          <!--          <span>Changi</span>-->
          <!--        </li>-->
          <!--        <li class="d-flex justify-content-between align-items-center">-->
          <!--          <span>Extras</span>-->
          <!--          <span>All Inclusive</span>-->
          <!--        </li>-->
          <!--        <li class="d-flex justify-content-between align-items-center">-->
          <!--          <span>Price per person</span>-->
          <!--          <a href="" class="price-btn">$250</a>-->
          <!--        </li>-->
          <!--      </ul>-->
          <!--    </div>-->
          <!--  </div>-->
          <!--</div>-->
          
          
          
        </div>
      </div>
    </section>

    <script type="text/javascript" src="js/custom.js"></script>
  </body>
</html>
