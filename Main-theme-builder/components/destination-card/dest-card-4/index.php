<?php 
include '../../../generic.php';
$dest_card_4 = getDataApi('destination');
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
    <link rel="stylesheet" href="../../common_assets/css/common-style.css" />
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
    <!-- Destination Card Section Start -->
    <section class="c-destination-section">
      <div class="container">
        <div class="c-destination-content">
          <div class="c-destination-slide-list">
                     <?php  
            foreach($dest_card_4 as $data)    
                {
            ?>
            <div class="c-destination-card-item">
              <div class="c-destination-img">
                <img src="<?= $data['gallery_images'][4]['image_url'] ?>" alt="" class="img-fluid" />
                <div class="c-destination-card-details">
                  <h2 class="c-destination-card-title"> <?= $data['dest_name'] ?></h2>
                  <p class="c-destination-card-text">
                      <?= $data['gallery_images'][4]['description'] ?>
                    
                  </p>
                  <a href="#" class="btn c-destination-card-btn"
                    >View Details</a
                  >
                </div>
              </div>
            </div>
            
            <?php } ?>
            
            <!--<div class="c-destination-card-item">-->
            <!--  <div class="c-destination-img">-->
            <!--    <img src="images/egyt.png" alt="" class="img-fluid" />-->
            <!--    <div class="c-destination-card-details">-->
            <!--      <h2 class="c-destination-card-title">Egypt Tour</h2>-->
            <!--      <p class="c-destination-card-text">-->
            <!--        We denounce with righteous indignation and dislike men who-->
            <!--        are so beguiled and demoralized by the charms of pleasure of-->
            <!--        the moment-->
            <!--      </p>-->
            <!--      <a href="#" class="btn c-destination-card-btn"-->
            <!--        >View Details</a-->
            <!--      >-->
            <!--    </div>-->
            <!--  </div>-->
            <!--</div>-->
            <!--<div class="c-destination-card-item">-->
            <!--  <div class="c-destination-img">-->
            <!--    <img src="images/landon.png" alt="" class="img-fluid" />-->
            <!--    <div class="c-destination-card-details">-->
            <!--      <h2 class="c-destination-card-title">London Tour</h2>-->
            <!--      <p class="c-destination-card-text">-->
            <!--        We denounce with righteous indignation and dislike men who-->
            <!--        are so beguiled and demoralized by the charms of pleasure of-->
            <!--        the moment-->
            <!--      </p>-->
            <!--      <a href="#" class="btn c-destination-card-btn"-->
            <!--        >View Details</a-->
            <!--      >-->
            <!--    </div>-->
            <!--  </div>-->
            <!--</div>-->
            <!--<div class="c-destination-card-item">-->
            <!--  <div class="c-destination-img">-->
            <!--    <img src="images/canada.png" alt="" class="img-fluid" />-->
            <!--    <div class="c-destination-card-details">-->
            <!--      <h2 class="c-destination-card-title">Canada Tour</h2>-->
            <!--      <p class="c-destination-card-text">-->
            <!--        We denounce with righteous indignation and dislike men who-->
            <!--        are so beguiled and demoralized by the charms of pleasure of-->
            <!--        the moment-->
            <!--      </p>-->
            <!--      <a href="#" class="btn c-destination-card-btn"-->
            <!--        >View Details</a-->
            <!--      >-->
            <!--    </div>-->
            <!--  </div>-->
            <!--</div>-->
            <!--<div class="c-destination-card-item">-->
            <!--  <div class="c-destination-img">-->
            <!--    <img src="images/japan.png" alt="" class="img-fluid" />-->
            <!--    <div class="c-destination-card-details">-->
            <!--      <h2 class="c-destination-card-title">Japan Tour</h2>-->
            <!--      <p class="c-destination-card-text">-->
            <!--        We denounce with righteous indignation and dislike men who-->
            <!--        are so beguiled and demoralized by the charms of pleasure of-->
            <!--        the moment-->
            <!--      </p>-->
            <!--      <a href="#" class="btn c-destination-card-btn"-->
            <!--        >View Details</a-->
            <!--      >-->
            <!--    </div>-->
            <!--  </div>-->
            <!--</div>-->
            <!--<div class="c-destination-card-item">-->
            <!--  <div class="c-destination-img">-->
            <!--    <img src="images/korea.png" alt="" class="img-fluid" />-->
            <!--    <div class="c-destination-card-details">-->
            <!--      <h2 class="c-destination-card-title">Korea Tour</h2>-->
            <!--      <p class="c-destination-card-text">-->
            <!--        We denounce with righteous indignation and dislike men who-->
            <!--        are so beguiled and demoralized by the charms of pleasure of-->
            <!--        the moment-->
            <!--      </p>-->
            <!--      <a href="#" class="btn c-destination-card-btn"-->
            <!--        >View Details</a-->
            <!--      >-->
            <!--    </div>-->
            <!--  </div>-->
            <!--</div>-->
          </div>
        </div>
      </div>
    </section>
    <!-- Destination Card Section End -->
  </body>
</html>
