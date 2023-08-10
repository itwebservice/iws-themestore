<?php 
include '../../../generic.php';
$footer_10 = getDataApi('general');
$popular_holidays = getDataApi('footer');
$social_10 = getDataApi('social');
$social_10 = !empty($social_10[0]) ? $social_10[0] : [];
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
    <link rel="stylesheet" href="../../common_assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../common_assets/css/common-style.css" />
    <link rel="stylesheet" href="../../common_assets/css/all.min.css" />
    <link rel="stylesheet" href="css/style.css" />

    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
  </head>
  <body>
    <footer class="bg-dark-purple text-white">
      <div class="footer-main border-bottom">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-6 col-md-12">
              <h6>Categories</h6>
              <ul class="list-unstyled mb-3">
                <li>
                  <a href="" class="btn footer-btn-outline btn-sm btn-pill mb-1"
                    >Tours</a
                  >
                  <a href="" class="btn footer-btn-outline btn-sm btn-pill mb-1"
                    >Hotels</a
                  >
                  <a href="" class="btn footer-btn-outline btn-sm btn-pill mb-1"
                    >Restaurants</a
                  >
                  <a href="" class="btn footer-btn-outline btn-sm btn-pill mb-1"
                    >Cars</a
                  >
                  <a href="" class="btn footer-btn-outline btn-sm btn-pill mb-1"
                    >Flights</a
                  >
                  <a href="" class="btn footer-btn-outline btn-sm btn-pill mb-1"
                    >Ships</a
                  >
                  <a href="" class="btn footer-btn-outline btn-sm btn-pill mb-1"
                    >Tour packages</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-12">
              <h6>Popular Holidays</h6>
              <ul class="list-unstyled mb-3">
                  <?php  
            foreach($popular_holidays as $data)    
                {
            ?>
                <li>
                  <a href=""
                    ><i
                      class="fa fa-angle-double-right me-2 text-secondary"
                    ></i>
                    <?= $data['package_name']?></a
                  >
                </li>
                <?php } ?>
              </ul>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-12">
              <h6 class="mt-6 mt-xl-0">Contact</h6>
              <ul class="list-unstyled mb-3">
                <li>
                  <a href=""
                    ><i class="fa fa-home me-3 text-secondary"></i> <?= $footer_10['app_address']?></a
                  >
                </li>
                <li>
                  <a href="mailto:<?= $footer_10['app_email_id']?>">
                    <i class="fa fa-envelope me-3 fs-12 text-secondary"></i>
                    <?= $footer_10['app_email_id']?></a
                  >
                </li>
                <li>
                  <a href=""
                    ><i class="fa fa-phone me-3 text-secondary"></i> <?= $footer_10['app_contact_no']?></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-dark-purple text-white p-0 border-bottom">
        <div class="container">
          <div class="p-2 text-center footer-links">
            <a href="" class="btn btn-link">Career</a>
            <a href="" class="btn btn-link">About Us</a>
            <a href="" class="btn btn-link">Awards</a>
            <a href="" class="btn btn-link">Gallery</a>
            <a href="" class="btn btn-link">Travel Blogs</a>
            <a href="" class="btn btn-link">Privacy Policy</a>
            <a href="" class="btn btn-link">Terms Of Use</a>
            <a href="" class="btn btn-link">Refund Policy</a>
            <a href="" class="btn btn-link">Cancellation Policy</a>
          </div>
        </div>
      </div>
      <div class="bg-dark-purple text-white-50 p-3">
        <div class="container">
          <div class="row d-flex">
            <div class="col-lg-12 col-sm-12 mt-2 mb-2 text-center">
              Copyright © 2023
              <a href="<?= $footer_10['app_website']?>" class="text-primary"><?= $footer_10['app_website']?></a> All rights reserved.
            </div>
            <div class="col-lg-12 col-sm-12 text-center mb-2 mt-2">
              <ul class="social-icons mb-0">
                  <?php
                        if(!empty($social_10['fb']))
                        { 
                    ?>
                <li>
                  <a class="social-icon" href="<?= $social_10['fb'] ?>"
                    ><i class="fa-brands fa-facebook"></i
                  ></a>
                </li>
                <?php } ?>
                <?php
                        if(!empty($social_10['tw']))
                        { 
                    ?>
                <li>
                  <a class="social-icon" href="<?= $social_10['tw'] ?>"
                    ><i class="fa-brands fa-twitter"></i
                  ></a>
                </li>
                <?php } ?>
                <?php
                        if(!empty($social_10['yu']))
                        { 
                    ?>
                <li>
                  <a class="social-icon" href="<?= $social_10['yu'] ?>"
                    ><i class="fa-brands fa-youtube"></i
                  ></a>
                </li>
                <?php } ?>
                <?php
                        if(!empty($social_10['li']))
                        { 
                    ?>
                <li>
                  <a class="social-icon" href="<?= $social_10['li'] ?>"
                    ><i class="fa-brands fa-linkedin"></i
                  ></a>
                </li>
                <?php } ?>
                <?php
                        if(!empty($social_10['wa']))
                        { 
                    ?>
                <li>
                  <a class="social-icon" href="<?= $social_10['wa'] ?>"
                    ><i class="fa-brands fa-whatsapp"></i
                  ></a>
                </li>
                <?php } ?>
                <?php
                        if(!empty($social_10['insta']))
                        { 
                    ?>
                <li>
                  <a class="social-icon" href="<?= $social_10['insta'] ?>"
                    ><i class="fa-brands fa-instagram"></i
                  ></a>
                </li>
                <?php } ?>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </body>
</html>
