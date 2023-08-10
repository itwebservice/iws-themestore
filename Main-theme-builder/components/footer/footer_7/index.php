<?php 
include '../../../generic.php';
$footer_7 = getDataApi('general');
$popular_holidays = getDataApi('footer');
$social_7 = getDataApi('social');
$social_7 = !empty($social_7[0]) ? $social_7[0] : [];
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Link Css Files -->
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../common_assets/css/common-style.css" />
    <link rel="stylesheet" href="../../common_assets/css/all.min.css" />
    <link rel="stylesheet" href="css/style.css" />

    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
  </head>

  <body>
    <footer class="bg-img text-light bg-dark">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-4 col-md-6">
            <h4 class="text-light mb-4">Address</h4>
            <p class="mb-2">
              <i class="fa fa-map-marker-alt me-3"></i><?= $footer_7['app_address'] ?>
            </p>
            <p class="mb-2">
              <i class="fa fa-phone-alt me-3"></i><?= $footer_7['app_contact_no']?>
            </p>
            <p class="mb-2">
              <i class="fa fa-envelope me-3"></i><a href="mailto:<?= $footer_7['app_email_id']?>"
                          > <?= $footer_7['app_email_id']?></a
                        >
            </p>
            <div class="d-flex pt-2">
                <?php
                        if(!empty($social_7['tw']))
                        { 
                    ?>
              <a class="btn btn-outline-light btn-social" href="<?= $social_7['tw'] ?>"
                ><i class="fab fa-twitter"></i
              ></a>
              <?php } ?>
              <?php
                        if(!empty($social_7['fb']))
                        { 
                    ?>
              <a class="btn btn-outline-light btn-social" href="<?= $social_7['fb'] ?>"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <?php } ?>
              <?php
                        if(!empty($social_7['yu']))
                        { 
                    ?>
              <a class="btn btn-outline-light btn-social" href="<?= $social_7['yu'] ?>"
                ><i class="fab fa-youtube"></i
              ></a>
              <?php } ?>
              <?php
                        if(!empty($social_7['li']))
                        { 
                    ?>
              <a class="btn btn-outline-light btn-social" href="<?= $social_7['li'] ?>"
                ><i class="fab fa-linkedin-in"></i
              ></a>
              <?php } ?>
              <?php
                        if(!empty($social_7['wa']))
                        { 
                    ?>
              <a class="btn btn-outline-light btn-social" href="<?= $social_7['wa'] ?>"
                ><i class="fab fa-whatsapp"></i
              ></a>
              <?php } ?>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <h4 class="text-light mb-4">Popular Holidays</h4>
            <?php  
            foreach($popular_holidays as $data)    
                {
            ?>
            <a class="btn btn-link" href=""><?= $data['package_name'] ?></a>
            <?php } ?>
          </div>
          <div class="col-lg-4 col-md-6">
            <h4 class="text-light mb-4">Quick Links</h4>
            <div class="row">
              <div class="col-md-6">
                <a class="btn btn-link" href="">About Us</a>
                <a class="btn btn-link" href="">Awards</a>
                <a class="btn btn-link" href="">Travel Blog</a>
                <a class="btn btn-link" href="">Refund Policy</a>
                <a class="btn btn-link" href="">Terms of Use</a>
              </div>
              <div class="col-md-6">
                <a class="btn btn-link" href="">Career</a>
                <a class="btn btn-link" href="">Gallery</a>
                <a class="btn btn-link" href="">Testimonials</a>
                <a class="btn btn-link" href="">Privacy Policy</a>
                <a class="btn btn-link" href="">Cancellation Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copyright">
          <div class="row">
            <div class="col-md-12 text-center mb-3 mb-md-0">
              © <a class="border-bottom" href=""><?= $footer_7['app_website'] ?></a>. All Right
              Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  </body>
</html>
