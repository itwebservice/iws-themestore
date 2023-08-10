<?php 
include '../../../generic.php';
$footer_8 = getDataApi('general');
$popular_holidays = getDataApi('footer');
$social_8 = getDataApi('social');
$social_8 = !empty($social_8[0]) ? $social_8[0] : [];
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
    <link rel="stylesheet" href="../../common_assets/css/all.min.css" />
    <link rel="stylesheet" href="css/style.css" />

    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
  </head>

  <body>
    <footer class="footer-content py-3">
      <div class="container py-md-3">
        <div class="footer-top text-center">
          <h2>
            <a class="navbar-brand pt-3 mb-3" href="index.html">
              <span class="fa fa-plane"></span> ITours
            </a>
          </h2>
        </div>
        <div class="row footer-top-inner-vv">
          <div class="col-lg-3 col-sm-6 mt-lg-0 mt-4">
            <div class="footer-lavi">
              <h3 class="mb-3 lavi_title">Popular Holidays</h3>
              <hr />
              <ul class="list-info-lavi">
                  <?php  
            foreach($popular_holidays as $data)    
                {
            ?>
                <li>
                  <a href=""
                    ><span
                      class="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></span>
                    <?= $data['package_name']?>
                  </a>
                </li>
                <?php } ?>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mt-lg-0 mt-4">
            <div class="footer-lavi">
              <h3 class="mb-3 lavi_title">Quick Links</h3>
              <hr />
              <div class="quick-links">
                <div class="col-md-6">
                  <ul class="list-info-lavi">
                    <li>
                      <a href="index.html"
                        ><span
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></span>
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#about"
                        ><span
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></span>
                        Awards
                      </a>
                    </li>
                    <li>
                      <a href="#services"
                        ><span
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></span>
                        Travel Blog
                      </a>
                    </li>
                    <li>
                      <a href="#team"
                        ><span
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></span>
                        Refund Policy
                      </a>
                    </li>
                    <li>
                      <a href="#contact"
                        ><span
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></span>
                        Terms of Use
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="list-info-lavi">
                    <li>
                      <a href="index.html"
                        ><span
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></span>
                        Career
                      </a>
                    </li>
                    <li>
                      <a href="#about"
                        ><span
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></span>
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a href="#services"
                        ><span
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></span>
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a href="#team"
                        ><span
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></span>
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#contact"
                        ><span
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></span>
                        Cancellation Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mt-lg-0 mt-4">
            <div class="footer-lavi">
              <h3 class="mb-3 lavi_title">Contact Us</h3>
              <hr />
              <div class="last-vv-contact">
                <p>
                  <a href="mailto:<?= $footer_8['app_email_id']?>"><?= $footer_8['app_email_id']?></a>
                </p>
              </div>
              <div class="last-vv-contact my-2">
                <p><?= $footer_8['app_contact_no']?></p>
              </div>
              <div class="last-vv-contact">
                <p>
                  <?= $footer_8['app_address']?>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-sm-6 mt-lg-0 mt-4">
            <div class="footer-lavi">
              <h3 class="mb-3 lavi_title">Social Links</h3>
              <hr />
              <div class="last-vv-contact">
                <p>
                  Join our social media's and get more update of latest tours,
                  sightseeing & attractions.
                </p>
              </div>
              <div class="social-links">
                  <?php
                        if(!empty($social_8['tw']))
                        { 
                    ?>
                <a class="social-btn" href="<?= $social_8['tw'] ?>">
                  <i class="fab fa-twitter"></i>
                </a>
                <?php } ?>
                <?php
                        if(!empty($social_8['fb']))
                        { 
                    ?>
                <a class="social-btn" href="<?= $social_8['fb'] ?>">
                  <i class="fab fa-facebook"></i>
                </a>
                <?php } ?>
                <?php
                        if(!empty($social_8['inst']))
                        { 
                    ?>
                <a class="social-btn" href="<?= $social_8['inst'] ?>">
                  <i class="fab fa-instagram"></i>
                </a>
                <?php } ?>
                <?php
                        if(!empty($social_8['wa']))
                        { 
                    ?>
                <a class="social-btn" href="<?= $social_8['wa'] ?>">
                  <i class="fab fa-whatsapp"></i>
                </a>
                <?php } ?>
                <?php
                        if(!empty($social_8['li']))
                        { 
                    ?>
                <a class="social-btn" href="<?= $social_8['li'] ?>">
                  <i class="fab fa-linkedin"></i>
                </a>
                <?php } ?>
                <?php
                        if(!empty($social_8['yu']))
                        { 
                    ?>
                <a class="social-btn" href="<?= $social_8['yu'] ?>">
                  <i class="fab fa-youtube"></i>
                </a>
                <?php } ?>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- //footer bottom -->
    </footer>
  </body>
</html>
