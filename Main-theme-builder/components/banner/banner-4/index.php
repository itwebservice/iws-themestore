<?php 
 include '../../../generic.php';

$banner_4 = getDataApi('banner');

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
    <link rel="stylesheet" href="../../common_assets/css/common-style.css" />
    <link rel="stylesheet" href="css/owl.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <!-- Header Start -->
    <div class="container-fluid header bg-white p-0">
      <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div class="col-md-6 p-5 mt-lg-5">
          <h1 class="display-5 animated fadeIn mb-4">
            Find A <span class="text-primary">Perfect Tour</span> To Enjoy With
            Your Family
          </h1>
          <p class="animated fadeIn mb-4 pb-2">
            <b>Exclusive deals and discounts:</b> Offer exclusive deals and discounts
            to customers who book through the website.
          </p>
          <a href="" class="btn btn-primary py-3 px-5 me-3 animated fadeIn"
            >Get Started</a
          >
        </div>
        <div class="col-md-6 animated fadeIn">
          <div class="owl-carousel header-carousel">
              <?php  
            foreach($banner_4 as $data)    
                {
            ?>
            <div class="owl-carousel-item">
              <img class="img-fluid" src="<?= BASE_URL_MAIN.$data ?>" alt="Banner-image" />
            </div>
            <?php } ?>
          </div>
        </div>
      </div>
    </div>
    <!-- Header End -->

    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
    <script src="js/owl-carousel.js"></script>
    <script src="js/custom.js"></script>
  </body>
</html>
