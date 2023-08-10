<?php 
include '../../../generic.php';
$footer_4 = getDataApi('general');
$popular_holidays = getDataApi('footer');
$social_4 = getDataApi('social');
$social_4 = !empty($social_4[0]) ? $social_4[0] : [];
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
    <script src="js/custom.js"></script>
  </head>

  <body>
    <!-- Footer Start -->
    <footer class="it-footer">
      <div class="it-footer-top">
        <div class="container">
          <div class="it-footer-top-content">
            <ul class="it-payment-list">
              <li class="it-payment-item">
                <a href="#" class="it-payment-link">
                  <i class="fa-brands fa-cc-amex"></i>
                </a>
              </li>
              <li class="it-payment-item">
                <a href="#" class="it-payment-link">
                  <i class="fa-brands fa-cc-visa"></i>
                </a>
              </li>
              <li class="it-payment-item">
                <a href="#" class="it-payment-link">
                  <i class="fa-solid fa-credit-card"></i>
                </a>
              </li>
              <li class="it-payment-item">
                <a href="#" class="it-payment-link">
                  <i class="fa-brands fa-cc-mastercard"></i>
                </a>
              </li>
              <li class="it-payment-item">
                <a href="#" class="it-payment-link">
                  <i class="fa-brands fa-cc-paypal"></i>
                </a>
              </li>
              <li class="it-payment-item">
                <a href="#" class="it-payment-link">
                  <i class="fa-brands fa-cc-discover"></i>
                </a>
              </li>
              <li class="it-payment-item">
                <a href="#" class="it-payment-link">
                  <i class="fa-brands fa-google-wallet"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="it-footer-main">
        <div class="container">
          <div class="row">
            <div class="col col-12 col-md-12 col-lg-6 col-xl-3">
              <div class="it-footer-logo">
                <img src="images/logo.png" alt="logo" class="imng-fluid" />
              </div>
              <p class="it-footer-description">
                Join our social media's and get more update of latest tours, sightseeing & attractions.
              </p>
              <h6 class="it-footer-title">Social Icons</h6>
              <ul class="it-social-list">
                  <?php
                        if(!empty($social_4['fb']))
                        { 
                    ?>
                <li class="it-social-item">
                  <a class="it-social-link" href="<?= $social_4['fb'] ?>">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <?php } ?>
                <?php
                        if(!empty($social_4['inst']))
                        { 
                    ?>
                <li class="it-social-item">
                  <a class="it-social-link" href="<?= $social_4['inst'] ?>">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <?php } ?>
                <?php
                        if(!empty($social_4['tw']))
                        { 
                    ?>
                <li class="it-social-item">
                  <a class="it-social-link" href="<?= $social_4['tw'] ?>">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <?php } ?>
                <?php
                        if(!empty($social_4['wa']))
                        { 
                    ?>
                <li class="it-social-item">
                  <a class="it-social-link" href="<?= $social_4['wa'] ?>">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
                <?php } ?>
                <?php
                        if(!empty($social_4['yu']))
                        { 
                    ?>
                <li class="it-social-item">
                  <a class="it-social-link" href="<?= $social_4['yu'] ?>">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <?php } ?>
                <?php
                        if(!empty($social_4['li']))
                        { 
                    ?>
                <li class="it-social-item">
                  <a class="it-social-link" href="<?= $social_4['li'] ?>">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <?php } ?>
              </ul>
            </div>
            <div class="col col-12 col-md-12 col-lg-6 col-xl-3">
              <h6 class="it-footer-title">Popular Tour Places</h6>
              <ul class="it-footer-menu-list">
                  <?php  
            foreach($popular_holidays as $data)    
                {
            ?>
                <li class="it-footer-menu-item">
                  <a href="#" class="it-footer-menu-link">
                      <i class="fa fa-angle-double-right"></i> <?= $data['package_name']?></a></li>
                      <?php } ?>
              </ul>
            </div>
            <div class="col col-12 col-md-12 col-lg-6 col-xl-2">
              <h6 class="it-footer-title">Important Links</h6>
              <ul class="it-footer-menu-list">
                <li class="it-footer-menu-item">
                  <a href="#" class="it-footer-menu-link"
                    ><i class="fa fa-angle-double-right"></i> Our Team</a
                  >
                </li>
                <li class="it-footer-menu-item">
                  <a href="#" class="it-footer-menu-link"
                    ><i class="fa fa-angle-double-right"></i> Contact US</a
                  >
                </li>
                <li class="it-footer-menu-item">
                  <a href="#" class="it-footer-menu-link"
                    ><i class="fa fa-angle-double-right"></i> About Us</a
                  >
                </li>
                <li class="it-footer-menu-item">
                  <a href="#" class="it-footer-menu-link"
                    ><i class="fa fa-angle-double-right"></i> Recent News</a
                  >
                </li>
                <li class="it-footer-menu-item">
                  <a href="#" class="it-footer-menu-link"
                    ><i class="fa fa-angle-double-right"></i> Terms and
                    Services</a
                  >
                </li>
              </ul>
            </div>
            <div class="col col-12 col-md-12 col-lg-6 col-xl-4">
              <h6 class="it-footer-title">Get In Touch</h6>
              <ul class="it-footer-menu-list">
                <li class="it-footer-menu-item">
                  <a href="#" class="it-footer-menu-link"
                    ><i class="fa fa-home"></i> <?= $footer_4['app_address']?></a
                  >
                </li>
                <li class="it-footer-menu-item">
                  <a href="#" class="it-footer-menu-link"
                    ><i class="fa fa-envelope"></i> <?= $footer_4['app_email_id']?></a
                  >
                </li>
                <li class="it-footer-menu-item">
                  <a href="#" class="it-footer-menu-link"
                    ><i class="fa fa-phone"></i> <?= $footer_4['app_contact_no']?></a
                  >
                </li>
                <li class="it-footer-menu-item">
                  <a href="#" class="it-footer-menu-link"
                    ><i class="fa fa-phone"></i> <?= $footer_4['app_landline_no']?></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="it-footer-bottom">
        <div class="container">
          <div class="it-footer-bottom-content">
            <p class="it-site-copyright">
              Copyright © 2023 <a href="<?= $footer_4['app_website'] ?>"><?= $footer_4['app_name'] ?></a>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
    <!-- Footer End -->
  </body>
</html>
