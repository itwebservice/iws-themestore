<?php 
 include '../../../generic.php';

$testi_2 = getDataApi('testimonial');

?>
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link rel="stylesheet" href="../../common_assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/swiper-bundle.min.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link
      href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <section class="container">
      <div class="testimonial mySwiper">
        <div class="testi-content swiper-wrapper">
            
               <?php  
            foreach($testi_2 as $data)    
                {
            ?>
          <div class="slide swiper-slide">
            <img src="<?= BASE_URL_MAIN.$data['filter_img']; ?> " alt="" class="image" />
            <p>
             <?= $data['testm'] ?>
            </p>

            <i class="bx bxs-quote-alt-left quote-icon"></i>

            <div class="details">
              <span class="name"><?= $data['name'] ?></span>
              <span class="job"><?= $data['designation'] ?></span>
            </div>
          </div>
          <?php } ?>
          
          
          <!--<div class="slide swiper-slide">-->
          <!--  <img src="images/img2.jpg" alt="" class="image" />-->
          <!--  <p>-->
          <!--    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,-->
          <!--    saepe provident dolorem a quaerat quo error facere nihil deleniti-->
          <!--    eligendi ipsum adipisci, fugit, architecto amet asperiores-->
          <!--    doloremque deserunt eum nemo.-->
          <!--  </p>-->

          <!--  <i class="bx bxs-quote-alt-left quote-icon"></i>-->

          <!--  <div class="details">-->
          <!--    <span class="name">Amay Das</span>-->
          <!--    <span class="job">Web Developer</span>-->
          <!--  </div>-->
          <!--</div>-->
          <!--<div class="slide swiper-slide">-->
          <!--  <img src="images/img3.jpg" alt="" class="image" />-->
          <!--  <p>-->
          <!--    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,-->
          <!--    saepe provident dolorem a quaerat quo error facere nihil deleniti-->
          <!--    eligendi ipsum adipisci, fugit, architecto amet asperiores-->
          <!--    doloremque deserunt eum nemo.-->
          <!--  </p>-->

          <!--  <i class="bx bxs-quote-alt-left quote-icon"></i>-->

          <!--  <div class="details">-->
          <!--    <span class="name">Atharv Nayak</span>-->
          <!--    <span class="job">Web Developer</span>-->
          <!--  </div>-->
          <!--</div>-->
        </div>
        <div class="swiper-button-next nav-btn"></div>
        <div class="swiper-button-prev nav-btn"></div>
        <div class="swiper-pagination"></div>
      </div>
    </section>

    <!-- Swiper JS -->
    <script src="js/swiper-bundle.min.js"></script>
    <!-- JavaScript -->
    <script src="js/custom.js"></script>
    <!-- Common js -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
  </body>
</html>
