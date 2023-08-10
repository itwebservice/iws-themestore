<?php 
 include '../../../generic.php';

$testi_2 = getDataApi('testimonial');

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
    <section class="it-testimonail-section">
      <div class="row justify-content-center text-center">
        <div class="col-lg-6">
          <h2 class="section-title text-center">Testimonials</h2>
          <p class="dest-sub">Tourist Feedback</p>
        </div>
      </div>
      <div class="container">
        <div class="it-testimonail-slider">
            <?php  
            foreach($testi_2 as $data)    
                {
            ?>
          <div class="it-testimonail-slide">
            <div class="it-testimonail-card">
              <div class="it-testimonail-img">
                <img src="<?= BASE_URL_MAIN.$data['filter_img'] ?>" class="img-fluid" alt="images" />
              </div>
              <div class="it-testimonail-card-body">
                <h4 class="it-testimonail-title"><?= $data['name'] ?></h4>
                <h6 class="it-testimonail-designation"><?= $data['designation'] ?></h6>
                <p class="it-testimonail-description">
                  <i class="fa-solid fa-quote-left"></i><?= $data['testm'] ?>
                </p>
              </div>
              <div class="it-testimonail-card-footer">
                <ul class="it-testimonail-review-list text-warning">
                  <li class="it-testimonail-review-item">
                    <i class="fa fa-star"> </i>
                  </li>
                  <li class="it-testimonail-review-item">
                    <i class="fa fa-star"> </i>
                  </li>
                  <li class="it-testimonail-review-item">
                    <i class="fa fa-star"> </i>
                  </li>
                  <li class="it-testimonail-review-item">
                    <i class="fa fa-star"> </i>
                  </li>
                  <li class="it-testimonail-review-item">
                    <i class="fa-solid fa-star-half-stroke"></i>
                  </li>
                </ul>
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
