<?php 
 include '../../../generic.php';

$testi_3 = getDataApi('testimonial');

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
    <link rel="stylesheet" href="../../common_assets/css/select2.min.css" />
    <link rel="stylesheet" href="css/style.css" />

    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
    <script src="../../common_assets/js/slick.min.js"></script>
    <script src="../../common_assets/js/smooth-scrollbar.js"></script>
    <script src="../../common_assets/js/select2.min.js"></script>
    <script src="js/custom.js"></script>
  </head>

  <body>
    <!-- Testimonail Section Start -->
    <section class="it-testimonail-v2-section">
      <div class="container">
        <div class="it-testimonail-v2-slider">
            <?php  
            foreach($testi_3 as $data)    
                {
            ?>
          <div class="it-testimonail-v2-slide">
            <div class="it-testimonail-v2-card">
              <div class="it-testimonail-v2-img">
                <img src="<?= BASE_URL_MAIN.$data['filter_img'] ?>" class="img-fluid" alt="images" />
              </div>
              <div class="it-testimonail-v2-card-body">
                <h4 class="it-testimonail-v2-title"><?= $data['name'] ?></h4>
                <ul class="it-testimonail-v2-review-list">
                  <li class="it-testimonail-v2-review-item it-review-selected">
                    <i class="fa fa-star"> </i>
                  </li>
                  <li class="it-testimonail-v2-review-item it-review-selected">
                    <i class="fa fa-star"> </i>
                  </li>
                  <li class="it-testimonail-v2-review-item it-review-selected">
                    <i class="fa fa-star"> </i>
                  </li>
                  <li class="it-testimonail-v2-review-item it-review-selected">
                    <i class="fa fa-star"> </i>
                  </li>
                  <li class="it-testimonail-v2-review-item">
                    <i class="fa fa-star"> </i>
                  </li>
                </ul>
                <p class="it-testimonail-v2-description">
                  <?= $data['testm'] ?>
                </p>
              </div>
            </div>
          </div>
          <?php } ?>
        </div>
      </div>
    </section>
    <!-- Testimonail Section End -->
  </body>
</html>
