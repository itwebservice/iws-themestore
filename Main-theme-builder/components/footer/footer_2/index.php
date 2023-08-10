<?php 
include '../../../generic.php';
$footer_2 = getDataApi('general');
$popular_holidays = getDataApi('footer');
$social_2 = getDataApi('social');
$social_2 = !empty($social_2[0]) ? $social_2[0] : [];
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Footer 2</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <link
      href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="../../common_assets/css/common-style.css" />
    <link rel="stylesheet" href="css/bootstrap.min.css" />

    <link rel="stylesheet" href="css/ionicons.min.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <footer class="footer-10">
      <div class="container">
        <div class="row mb-5 pb-3 no-gutters">
          <div class="col-md-4 mb-md-0 mb-4 d-flex">
            <div class="con con-1 w-100 py-5">
              <div class="con-info w-100 text-center">
                <div
                  class="icon d-flex align-items-center justify-content-center"
                >
                  <span class="ion-ios-call"></span>
                </div>
                <div class="text">
                  <span><?= $footer_2['app_contact_no']?></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-md-0 mb-4 d-flex">
            <div class="con con-2 w-100 py-5">
              <div class="con-info w-100 text-center">
                <div
                  class="icon d-flex align-items-center justify-content-center"
                >
                  <span class="ion-ios-mail"></span>
                </div>
                <div class="text">
                  <span><?= $footer_2['app_email_id']?></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-md-0 mb-4 d-flex">
            <div class="con con-3 w-100 py-5">
              <div class="con-info w-100 text-center">
                <div
                  class="icon d-flex align-items-center justify-content-center"
                >
                  <span class="ion-ios-pin"></span>
                </div>
                <div class="text">
                  <span
                    ><?= $footer_2['app_address']?></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-3 mb-md-0 mb-4">
                <h2 class="footer-heading">Popular Holidays</h2>
                <ul class="list-unstyled">
                    <?php  
            foreach($popular_holidays as $data)    
                {
            ?>
                  <li><a href="#" class="d-block"><?= $data['package_name']?></a></li>
                  <?php
                }
                ?>
                </ul>
              </div>
              <div class="col-md-5 mb-md-0 mb-4">
                <h2 class="footer-heading">Important Links</h2>
                <div class="row">
                  <div class="col-6">
                    <ul class="list-unstyled">
                      <li><a href="#" class="d-block">About Us</a></li>
                      <li><a href="#" class="d-block">Awards</a></li>
                      <li><a href="#" class="d-block">Travel Blog</a></li>
                      <li><a href="#" class="d-block">Refund Policy</a></li>
                      <li><a href="#" class="d-block">Terms of Use</a></li>
                    </ul>
                  </div>
                  <div class="col-6">
                    <ul class="list-unstyled">
                      <li><a href="#" class="d-block">Career</a></li>
                      <li><a href="#" class="d-block">Gallery</a></li>
                      <li><a href="#" class="d-block">Testimonials</a></li>
                      <li><a href="#" class="d-block">Privacy Policy</a></li>
                      <li>
                        <a href="#" class="d-block">Cancellation Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-md-0 mb-4">
                <h2 class="footer-heading">Follow Us</h2>
                <ul class="ftco-footer-social p-0">
                    <?php
                        if(!empty($social_2['tw']))
                        { 
                    ?>
                  <li class="ftco-animate">
                    <a
                      href="<?= $social_2['tw'] ?>"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Twitter"
                      ><span class="ion-logo-twitter"></span
                    ></a>
                  </li>
                  <?php } ?>
                  <?php
                        if(!empty($social_2['fb']))
                        { 
                    ?>
                  <li class="ftco-animate">
                    <a
                      href="<?= $social_2['fb'] ?>"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Facebook"
                      ><span class="ion-logo-facebook"></span
                    ></a>
                  </li>
                  <?php } ?>
                  <?php
                        if(!empty($social_2['inst']))
                        { 
                    ?>
                  <li class="ftco-animate">
                    <a
                      href="<?= $social_2['inst'] ?>"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Instagram"
                      ><span class="ion-logo-instagram"></span
                    ></a>
                  </li>
                  <?php } ?>
                  <?php
                        if(!empty($social_2['yu']))
                        { 
                    ?>
                  <li class="ftco-animate">
                    <a
                      href="<?= $social_2['yu'] ?>"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="youtube"
                      ><span class="ion-logo-youtube"></span
                    ></a>
                  </li>
                  <?php } ?>
                  <?php
                        if(!empty($social_2['wa']))
                        { 
                    ?>
                  <li class="ftco-animate">
                    <a
                      href="<?= $social_2['wa'] ?>"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="whatsapp"
                      ><span class="ion-logo-whatsapp"></span
                    ></a>
                  </li>
                  <?php } ?>
                  <?php
                        if(!empty($social_2['li']))
                        { 
                    ?>
                  <li class="ftco-animate">
                    <a
                      href="<?= $social_2['li'] ?>"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="linkedin"
                      ><span class="ion-logo-linkedin"></span
                    ></a>
                  </li>
                  <?php } ?>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5 pt-4 border-top">
          <div class="col-md-12 col-lg-12 mb-md-0 mb-4">
            <p class="copyright mb-0 text-center">
              Copyright &copy;
              <script>
                document.write(new Date().getFullYear());
              </script>
              All rights reserved.
              <a href="" target="_blank"><?= $footer_2['app_name']?></a>
            </p>
          </div>
        </div>
      </div>
    </footer>

    <script src="js/jquery.min.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
