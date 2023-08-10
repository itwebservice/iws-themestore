
<?php 
include '../../../generic.php';
$dest_card_3 = getDataApi('destination');
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
    <link rel="stylesheet" href="../../common_assets/css/slick.css" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css"
    />
    <link rel="stylesheet" href="css/style.css" />
    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
    <script src="../../common_assets/js/slick.min.js"></script>
    <script src="js/custom.js"></script>
  </head>

  <body>
    <!-- Widget Style nine Section Star -->
    <section class="style-nine-section">
      <div class="container">
        <div class="style-nine-content">
          <div class="section-title mb-6 mx-auto text-center">
            <h2 class="mb-1">
              Explore <span class="theme">Top Destinations</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div class="style-nine-card-list">
            <div class="row">
                 <?php  
            foreach($dest_card_3 as $data)    
                {
            ?>
              <div class="col col-12 col-md-6 col-lg-3 col-xl-3 mt-3 mb-3">
                <div class="style-nine-card-item">
                  <div class="style-nine-img">
                    <img src="<?= $data['gallery_images'][4]['image_url'] ?>" alt="" class="img-fluid" />
                    <div class="style-nine-card-details">
                      <p class="style-nine-card-title mb-2 text-white">
                       <?= $data['dest_name'] ?>
                      </p>
                      <p class="style-nine-location mb-0">
                        <!--<small><i class="bi bi-geo-alt"></i> 8 Cities</small>-->
                        <small><i class="bi bi-eye"></i> <?= $data['total_packages'] ?> Tours</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <?php } ?>
              <!--<div class="col col-12 col-md-6 col-lg-3 col-xl-3">-->
              <!--  <div class="style-nine-card-item">-->
              <!--    <div class="style-nine-img">-->
              <!--      <img src="images/card-9.jpg" alt="" class="img-fluid" />-->
              <!--      <div class="style-nine-offer style-germany-offer">-->
              <!--        <span class="text-white"-->
              <!--          ><b>40%</b><br />-->
              <!--          OFF</span-->
              <!--        >-->
              <!--      </div>-->
              <!--      <div class="style-nine-card-details">-->
              <!--        <p class="style-nine-card-title mb-2 text-white">-->
              <!--          Germany-->
              <!--        </p>-->
              <!--        <p class="style-nine-location mb-0">-->
              <!--          <small><i class="bi bi-geo-alt"></i> 17 Cities</small>-->
              <!--          <small><i class="bi bi-eye"></i> 24+ TourPlaces</small>-->
              <!--        </p>-->
              <!--      </div>-->
              <!--    </div>-->
              <!--  </div>-->
              <!--</div>-->
              <!--<div class="col col-12 col-md-6 col-lg-3 col-xl-3">-->
              <!--  <div class="style-nine-card-item">-->
              <!--    <div class="style-nine-img">-->
              <!--      <img src="images/card-13.jpg" alt="" class="img-fluid" />-->
              <!--      <div class="style-nine-offer style-london-offer">-->
              <!--        <span class="text-white"-->
              <!--          ><b>70%</b><br />-->
              <!--          OFF</span-->
              <!--        >-->
              <!--      </div>-->
              <!--      <div class="style-nine-card-details">-->
              <!--        <p class="style-nine-card-title mb-2 text-white">-->
              <!--          London-->
              <!--        </p>-->
              <!--        <p class="style-nine-location mb-0">-->
              <!--          <small><i class="bi bi-geo-alt"></i> 12 Cities</small>-->
              <!--          <small><i class="bi bi-eye"></i> 18+ TourPlaces</small>-->
              <!--        </p>-->
              <!--      </div>-->
              <!--    </div>-->
              <!--  </div>-->
              <!--</div>-->
              <!--<div class="col col-12 col-md-6 col-lg-3 col-xl-3">-->
              <!--  <div class="style-nine-card-item">-->
              <!--    <div class="style-nine-img">-->
              <!--      <img src="images/card-14.jpg" alt="" class="img-fluid" />-->
              <!--      <div class="style-nine-offer style-spain-offer">-->
              <!--        <span class="text-white"-->
              <!--          ><b>60%</b><br />-->
              <!--          OFF</span-->
              <!--        >-->
              <!--      </div>-->
              <!--      <div class="style-nine-card-details">-->
              <!--        <p class="style-nine-card-title mb-2 text-white">Spain</p>-->
              <!--        <p class="style-nine-location mb-0">-->
              <!--          <small><i class="bi bi-geo-alt"></i> 12 Cities</small>-->
              <!--          <small><i class="bi bi-eye"></i> 40+ TourPlaces</small>-->
              <!--        </p>-->
              <!--      </div>-->
              <!--    </div>-->
              <!--  </div>-->
              <!--</div>-->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Widget Style nine Section Star -->
  </body>
</html>
