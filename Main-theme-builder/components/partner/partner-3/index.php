<?php 
 include '../../../generic.php';

$partner_3 = getDataApi('association');

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
    <section id="our-partners" class="our-partners">
      <div class="partner-logo section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="main-title text-center">
              <h2>Our Partners</h2>
              <p>We only work with the best companies around the globe</p>
            </div>
          </div>
        </div>
          <div class="container">
            <div class="row">
              <div class="partner_logo owl-carousel">
                 <?php  
            foreach($partner_3 as $data)    
                {
            ?>
                  <img src="<?= $data ?>" loading="lazy" alt="partners">
            <?php } ?>
              </div>
            </div>
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
