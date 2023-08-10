<?php 
include '../../../generic.php';
$footer_3 = getDataApi('general');
$popular_holidays = getDataApi('footer');
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,600&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="fonts/icomoon/style.css">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    
    <!-- Style CSS -->
    <link rel="stylesheet" href="css/style.css">

    <title>Footer 03</title>
  </head>
  <body>
    <footer class="footer-14398">
      
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-3">
              <a href="#" class="footer-site-logo">ITours</a>
              <p><?= $footer_3['app_address']?></p>
            </div>
            <div class="col-md-3 ml-auto">
              <h3>Popular Holidays</h3>
              <ul class="list-unstyled links">
                  <?php  
            foreach($popular_holidays as $data)    
                {
            ?>
                <li><a href="#"><?= $data['package_name']?></a></li>
                <?php
                }
                ?>
              </ul>
            </div>
            <div class="col-md-4 ml-auto">
              <h3>Important Links</h3>
              <div class="row">
                <div class="col-4">
              <ul class="list-unstyled links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Awards</a></li>
                <li><a href="#">Travel Blog</a></li>
                <li><a href="#">Terms of Use</a></li>
              </ul>
                </div>
                <div class="col-6">
                  <ul class="list-unstyled links">
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Refund Policy</a></li>
                  </ul>
                    </div>
              </div>
            </div>
            <div class="col-md-2 ml-auto">
              <h3>Contact Us</h3>
              <p>Email: <?= $footer_3['app_email_id']?></p>
              <p>Phone: <?= $footer_3['app_contact_no']?></p>
            </div>
          </div>

          <div class="row mb-4">
            <div class="col-12 pb-4">
              <div class="line"></div>
            </div>
            <div class="col-md-6 text-md-left">
              <ul class="list-unstyled link-menu nav-left">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cancellation Policy</a></li>
              </ul>
            </div>
            <div class="col-md-6 text-md-right">
              <ul class="list-unstyled social nav-right">
                <li><a href="#"><span class="icon-twitter"></span></a></li>
                <li><a href="#"><span class="icon-instagram"></span></a></li>
                <li><a href="#"><span class="icon-facebook"></span></a></li>
                <li><a href="#"><span class="icon-pinterest"></span></a></li>
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 text-center">
              <p><small>Copyright <?= $footer_3['app_name']?>. All rights Reserved</small></p>
            </div>
          </div>
        </div>
        
      </div>
    </footer>

    
    
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>