<?php 
 include '../../../generic.php';

$testi_2 = getDataApi('testimonial');

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
    <section id="testimonials">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="counter-heading">
              <p class="colored_heading">Our Testimonials</p>
              <h2 class="heading_mainc margin_heading">Happy Yoga People</h2>
            </div>
          </div>
        </div>

        <div class="owl-testimonial owl-carousel owl-theme">
                <?php  
            foreach($testi_2 as $data)    
                {
            ?>
            <div class="item">
            <div class="testimonial-box">
              <div class="quote_box">
                <i class="fas fa-quote-right quote"></i>
              </div>
              <p class="info infot_margin">
              <?= $data['testm'] ?>
              </p>
              <div class="testimonial_img">
                <img src="<?= BASE_URL_MAIN.$data['filter_img']; ?>" alt="testimonial picture" />
              </div>
              <div class="text">
                <p class="testimonial_name"><?= $data['name'] ?></p>
                <p class="info blue_text"><?= $data['designation'] ?></p>
              </div>
            </div>
          </div>
          <?php } ?>

          
          <!--<div class="item">-->
          <!--  <div class="testimonial-box">-->
          <!--    <div class="quote_box">-->
          <!--      <i class="fas fa-quote-right quote"></i>-->
          <!--    </div>-->
          <!--    <p class="info infot_margin">-->
          <!--      Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam,-->
          <!--      sed diam nonummy nibh euismod tincidunt until laoreet.-->
          <!--    </p>-->
          <!--    <div class="testimonial_img">-->
          <!--      <img src="images/testimonial1.png" alt="testimonial picture" />-->
          <!--    </div>-->
          <!--    <div class="text">-->
          <!--      <p class="testimonial_name">David Raleway</p>-->
          <!--      <p class="info blue_text">Business</p>-->
          <!--    </div>-->
          <!--  </div>-->
          <!--</div>-->

          <!--<div class="item">-->
          <!--  <div class="testimonial-box">-->
          <!--    <div class="quote_box">-->
          <!--      <i class="fas fa-quote-right quote"></i>-->
          <!--    </div>-->
          <!--    <p class="info infot_margin">-->
          <!--      Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam,-->
          <!--      sed diam nonummy nibh euismod tincidunt until laoreet.-->
          <!--    </p>-->
          <!--    <div class="testimonial_img">-->
          <!--      <img src="images/testimonial3.png" alt="testimonial picture" />-->
          <!--    </div>-->
          <!--    <div class="text">-->
          <!--      <p class="testimonial_name">Sam Hendias</p>-->
          <!--      <p class="info blue_text">Web Designer</p>-->
          <!--    </div>-->
          <!--  </div>-->
          <!--</div>-->

          <!--<div class="item">-->
          <!--  <div class="testimonial-box">-->
          <!--    <div class="quote_box">-->
          <!--      <i class="fas fa-quote-right quote"></i>-->
          <!--    </div>-->
          <!--    <p class="info infot_margin">-->
          <!--      Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam,-->
          <!--      sed diam nonummy nibh euismod tincidunt until laoreet.-->
          <!--    </p>-->
          <!--    <div class="testimonial_img">-->
          <!--      <img src="images/testimonial1.png" alt="testimonial picture" />-->
          <!--    </div>-->
          <!--    <div class="text">-->
          <!--      <p class="testimonial_name">David Raleway</p>-->
          <!--      <p class="info blue_text">Business</p>-->
          <!--    </div>-->
          <!--  </div>-->
          <!--</div>-->

          <!--<div class="item">-->
          <!--  <div class="testimonial-box">-->
          <!--    <div class="quote_box">-->
          <!--      <i class="fas fa-quote-right quote"></i>-->
          <!--    </div>-->
          <!--    <p class="info infot_margin">-->
          <!--      Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam,-->
          <!--      sed diam nonummy nibh euismod tincidunt until laoreet.-->
          <!--    </p>-->
          <!--    <div class="testimonial_img">-->
          <!--      <img src="images/testimonial2.png" alt="testimonial picture" />-->
          <!--    </div>-->
          <!--    <div class="text">-->
          <!--      <p class="testimonial_name">Kate Marasisa</p>-->
          <!--      <p class="info blue_text">Illustrator</p>-->
          <!--    </div>-->
          <!--  </div>-->
          <!--</div>-->

          <!--<div class="item">-->
          <!--  <div class="testimonial-box">-->
          <!--    <div class="quote_box">-->
          <!--      <i class="fas fa-quote-right quote"></i>-->
          <!--    </div>-->
          <!--    <p class="info infot_margin">-->
          <!--      Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam,-->
          <!--      sed diam nonummy nibh euismod tincidunt until laoreet.-->
          <!--    </p>-->
          <!--    <div class="testimonial_img">-->
          <!--      <img src="images/testimonial3.png" alt="testimonial picture" />-->
          <!--    </div>-->
          <!--    <div class="text">-->
          <!--      <p class="testimonial_name">Sam Hendias</p>-->
          <!--      <p class="info blue_text">Web Designer</p>-->
          <!--    </div>-->
          <!--  </div>-->
          <!--</div>-->
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
