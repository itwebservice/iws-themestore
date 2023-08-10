<?php 
include '../../../generic.php';
$footer_5 = getDataApi('general');
$popular_holidays = getDataApi('footer');
$social_5 = getDataApi('social');
$social_5 = !empty($social_5[0]) ? $social_5[0] : [];
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
    <!-- Footer Start -->
    <footer class="it-footer-v-two">
      <div class="it-footer-content-v-two">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12">
              <div class="it-footer-about">
                <h3 class="it-footer-menu-title-v-two">Contact Info</h3>
                <p class="it-footer-contact-description">
                  Phone : <?= $footer_5['app_contact_no'] ?><br />
                  Location : <?= $footer_5['app_address'] ?>
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
              <div class="footer-links">
                <h3 class="it-footer-menu-title-v-two">Popular Holidays</h3>
                <ul class="it-footer-menu-v-two">
                    <?php  
            foreach($popular_holidays as $data)    
                {
            ?>
                  <li class="it-footer-menu-item-v-two">
                    <a href="#" class="it-footer-menu-link-v-two"><?= $data['package_name'] ?></a>
                  </li>
                  <?php } ?>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
              <div class="footer-links">
                <h3 class="it-footer-menu-title-v-two">Important Links</h3>
                <div class="row">
                  <div class="col-6">
                    <ul class="it-footer-menu-v-two">
                      <li class="it-footer-menu-item-v-two">
                        <a href="#" class="it-footer-menu-link-v-two"
                          >About Us</a
                        >
                      </li>
                      <li class="it-footer-menu-item-v-two">
                        <a href="#" class="it-footer-menu-link-v-two">Awards</a>
                      </li>
                      <li class="it-footer-menu-item-v-two">
                        <a href="#" class="it-footer-menu-link-v-two"
                          >Travel Blog</a
                        >
                      </li>
                      <li class="it-footer-menu-item-v-two">
                        <a href="#" class="it-footer-menu-link-v-two"
                          >Refund Policy</a
                        >
                      </li>
                      <li class="it-footer-menu-item-v-two">
                        <a href="#" class="it-footer-menu-link-v-two"
                          >Terms of Use</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="col-6">
                    <ul class="it-footer-menu-v-two">
                      <li class="it-footer-menu-item-v-two">
                        <a href="#" class="it-footer-menu-link-v-two">Career</a>
                      </li>
                      <li class="it-footer-menu-item-v-two">
                        <a href="#" class="it-footer-menu-link-v-two"
                          >Gallery</a
                        >
                      </li>
                      <li class="it-footer-menu-item-v-two">
                        <a href="#" class="it-footer-menu-link-v-two"
                          >Testimonials</a
                        >
                      </li>
                      <li class="it-footer-menu-item-v-two">
                        <a href="#" class="it-footer-menu-link-v-two"
                          >Privacy Policy</a
                        >
                      </li>
                      <li class="it-footer-menu-item-v-two">
                        <a href="#" class="it-footer-menu-link-v-two"
                          >Cancellation Policy</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12">
              <div class="it-footer-subscribe">
                <h3 class="it-footer-menu-title-v-two">Follow Us</h3>
                <p class="it-mailing-description">
                  Join our social media's and get more update of latest tours,
                  sightseeing & attractions.
                </p>
                <ul class="it-footer-social-list">
                    <?php
                        if(!empty($social_5['fb']))
                        { 
                    ?>
                  <li class="it-footer-social-item">
                    <a href="<?= $social_5['fb'] ?>" class="it-footer-social-link"
                      ><i class="fab fa-facebook" aria-hidden="true"></i
                    ></a>
                  </li>
                  <?php } ?>
                  <?php
                        if(!empty($social_5['tw']))
                        { 
                    ?>
                  <li class="it-footer-social-item">
                    <a href="<?= $social_5['tw'] ?>" class="it-footer-social-link"
                      ><i class="fab fa-twitter" aria-hidden="true"></i
                    ></a>
                  </li>
                  <?php } ?>
                  <?php
                        if(!empty($social_5['inst']))
                        { 
                    ?>
                  <li class="it-footer-social-item">
                    <a href="<?= $social_5['inst'] ?>" class="it-footer-social-link"
                      ><i class="fab fa-instagram" aria-hidden="true"></i
                    ></a>
                  </li>
                  <?php } ?>
                  <?php
                        if(!empty($social_5['li']))
                        { 
                    ?>
                  <li class="it-footer-social-item">
                    <a href="<?= $social_5['li'] ?>" class="it-footer-social-link"
                      ><i class="fab fa-linkedin" aria-hidden="true"></i
                    ></a>
                  </li>
                  <?php } ?>
                  <?php
                        if(!empty($social_5['yu']))
                        { 
                    ?>
                  <li class="it-footer-social-item">
                    <a href="<?= $social_5['yu'] ?>" class="it-footer-social-link"
                      ><i class="fab fa-youtube" aria-hidden="true"></i
                    ></a>
                  </li>
                  <?php } ?>
                  <?php
                        if(!empty($social_5['wa']))
                        { 
                    ?>
                  <li class="it-footer-social-item">
                    <a href="<?= $social_5['wa'] ?>" class="it-footer-social-link"
                      ><i class="fab fa-whatsapp" aria-hidden="true"></i
                    ></a>
                  </li>
                  <?php } ?>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="it-footer-copyright">
        <div class="container">
          <div class="it-footer-copyright__inner">
            <div class="it-footer-copyright-text">
              <p class="it-footer-copyright-description">
                2023 <?= $footer_5['app_name'] ?>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- Footer End -->
  </body>
</html>
