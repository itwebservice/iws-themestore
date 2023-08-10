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
    <link rel="stylesheet" href="../../common_assets/css/common-style.css" />
    <link rel="stylesheet" href="../../common_assets/css/all.min.css" />
    <link rel="stylesheet" href="css/owl.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>

  <body>
    <section class="testimonial-sec" id="testimonial-sec">
      <div class="container">
        <!--Heading-->
        <div class="row">
          <div
            class="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2 text-center wow fadeIn"
            style="visibility: visible; animation-name: fadeIn"
          >
            <div class="heading-area d-inline-block">
              <h2 class="title">Testimonial</h2>
              <h6 class="sub-title main-color">Our valuable customer</h6>
            </div>
          </div>
        </div>
        <!--Heading-->

        <div class="row">
          <div class="col-md-12">
            <div
              id="testimonial-slider"
              class="owl-carousel owl-theme wow fadeIn"
            >
                     <?php  
            foreach($testi_2 as $data)    
                {
            ?>
              <div class="testimonial">
                <div class="pic">
                  <img src="<?= BASE_URL_MAIN.$data['filter_img']; ?>" />
                </div>
                <p class="description">
                 <?= $data['testm'] ?>
                </p>
                <div class="testimonial-profile">
                  <h3 class="title"><?= $data['name'] ?>-</h3>
                  <span class="post"><?= $data['designation'] ?></span>
                </div>
              </div>
              <?php } ?>

            
        
            </div>
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
