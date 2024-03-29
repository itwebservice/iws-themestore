<?php 
include '../../../generic.php';
$footer_6 = getDataApi('general');
$popular_holidays = getDataApi('footer');
$social_6 = getDataApi('social');
$social_6 = !empty($social_6[0]) ? $social_6[0] : [];
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
    <link rel="stylesheet" href="../../common_assets/css/common-style.css">
    <link rel="stylesheet" href="../../common_assets/css/all.min.css" />
    <link rel="stylesheet" href="css/style.css" />

    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
  </head>

  <body>
    <footer id="cust-footer">
      <div class="container">
        <div class="first-footer">
          <div class="row">
            <div class="col-md-12">
              <div class="links dark footer-contact-links">
                <div class="footer-contact-links-wrapper">
                  <div class="footer-contact-link-wrapper">
                    <div class="image-wrapper footer-contact-link-icon">
                      <div class="icon-footer">
                        <i class="fa fa-phone"></i>
                      </div>
                    </div>
                    <div class="footer-contact-link-content">
                      <h6>Call us</h6>
                      <p><a href=""> <?= $footer_6['app_contact_no']?></a></p>
                    </div>
                  </div>
                  <div class="footer-contact-links-divider"></div>
                  <div class="footer-contact-link-wrapper">
                    <div class="image-wrapper footer-contact-link-icon">
                      <div class="icon-footer">
                        <i class="fa fa-message"></i>
                      </div>
                    </div>
                    <div class="footer-contact-link-content">
                      <h6>Write to us</h6>
                      <p class="mail">
                        <a href="mailto:<?= $footer_6['app_email_id']?>"
                          > <?= $footer_6['app_email_id']?></a
                        >
                      </p>
                    </div>
                  </div>
                  <div class="footer-contact-links-divider"></div>
                  <div class="footer-contact-link-wrapper">
                    <div class="image-wrapper footer-contact-link-icon">
                      <div class="icon-footer">
                        <i class="fa fa-id-card"></i>
                      </div>
                    </div>
                    <div class="footer-contact-link-content">
                      <h6>Address</h6>
                      <p>
                        <a href="https://www.google.com/maps" target="_blank"
                          ><?= $footer_6['app_address']?></a
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="second-footer">
            <div class="row">
               <div class="col-md-4 widget-area ">
                  <div class="widget footer-widget-area clearfix">
                     <div class="footer-logo"><a href="" class="img-fluid"><img src="https://demo1.itourscloud.com/crm/images/Admin-Area-Logo.png" alt="Travol Agency"></a></div>
                     <div class="widget-text">
                        <p>Quisque imperdiet sapien porttito the bibendum sellentesque the commodo erat acar accumsa lobortis, enim diam the nesuen.</p>
                        <div class="social-icons">
                           <ul class="list-inline">
                               <?php
                        if(!empty($social_6['fb']))
                        { 
                    ?>
                              <li><a href="<?= $social_6['fb'] ?>"><i class="fa-brands fa-facebook"></i></a></li>
                              <?php } ?>
                              <?php
                        if(!empty($social_6['li']))
                        { 
                    ?>
                              <li><a href="<?= $social_6['li'] ?>"><i class="fa-brands fa-linkedin"></i></a></li>
                              <?php } ?>
                               <?php
                        if(!empty($social_6['tw']))
                        { 
                    ?>
                              <li><a href="<?= $social_6['tw'] ?>"><i class="fa-brands fa-twitter"></i></a></li>
                              <?php } ?>
                              <?php
                        if(!empty($social_6['wa']))
                        { 
                    ?>
                              <li><a href="<?= $social_6['wa'] ?>"><i class="fa-brands fa-whatsapp"></i></a></li>
                              <?php } ?>
                              <?php
                        if(!empty($social_6['inst']))
                        { 
                    ?>
                              <li><a href="<?= $social_6['inst'] ?>"><i class="fa-brands fa-instagram"></i></a></li>
                              <?php } ?>
                              <?php
                        if(!empty($social_6['yu']))
                        { 
                    ?>
                              <li><a href="<?= $social_6['yu'] ?>"><i class="fa-brands fa-youtube"></i></a></li>
                              <?php } ?>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 widget-area ">
                  <div id="nav_menu-2" class="widget footer-widget-area clearfix widget_nav_menu">
                     <h3 class="widget-title">Quick Links</h3>
                     <div class="menu-widget-menu-container">
                        <div class="row">
                            <div class="col-md-6">
                               <ul id="menu-widget-menu" class="menu">
                                  <li class="menu-item"><a href="">About Us</a></li>
                                  <li class="menu-item"><a href="">Awards</a></li>
                                  <li class="menu-item"><a href="">Travel Blog</a></li>
                                  <li class="menu-item"><a href="">Refund Policy</a></li>
                                  <li class="menu-item"><a href="">Terms of Use</a></li>
                               </ul>
                            </div>
                            <div class="col-md-6">
                               <ul id="menu-widget-menu" class="menu">
                                  <li class="menu-item"><a href="">Career</a></li>
                                  <li class="menu-item"><a href="">Gallery</a></li>
                                  <li class="menu-item"><a href="">Testimonials</a></li>
                                  <li class="menu-item"><a href="">Privacy Policy</a></li>
                                  <li class="menu-item"><a href="">Cancellation Policy</a></li>
                               </ul>
                            </div>
                         </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 widget-area ">
                  <div class="widget footer-widget-area clearfix">
                     <h3 class="widget-title">Popular Holidays</h3>
                     <ul class="menu">
                         <?php  
            foreach($popular_holidays as $data)    
                {
            ?>
                        <li><a href=""><?= $data['package_name']?></a></li>
                        <?php } ?>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
        </div>
      </div>
    </footer>
  </body>
</html>
