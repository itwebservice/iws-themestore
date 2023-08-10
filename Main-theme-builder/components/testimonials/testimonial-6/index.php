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
    <link rel="stylesheet" href="../../common_assets/css/all.min.css" />
    <link rel="stylesheet" href="css/owl.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>

  <body>
    <div class="testimonial-area testimonial-style-one mtb-50">
      <div class="testimonial-shape-group"></div>
      <div class="container position-relative">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <div class="section-head-alpha">
              <h2>What Our Client Say About Us</h2>
              <p>
                Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                venenatis hendrerit a id lectus. Suspendissendt blandit
                interdum. Sed pellentesque at nunc eget consectetur.
              </p>
            </div>
          </div>
        </div>
        <div class="card-testimonial owl-carousel">
                <?php  
            foreach($testi_2 as $data)    
                {
            ?>
          <div class="testimonial-card testimonial-card-alpha">
            <div class="testimonial-card-top">
              <div class="qoute-icon"><i class="fa fa-quote-left"></i></div>
              <div class="testimonial-thumb">
                <img src="<?= BASE_URL_MAIN.$data['filter_img']; ?>" alt="images" />
              </div>
            </div>
            <div class="testimonial-body">
              <p>
                <?= $data['testm'] ?>
              </p>
              <div class="testimonial-bottom">
                <div class="reviewer-info">
                  <h4 class="reviewer-name"><?= $data['name'] ?></h4>
                  <h6><?= $data['designation'] ?></h6>
                </div>
              </div>
            </div>
          </div>
                <?php } ?>
          <!--<div class="testimonial-card testimonial-card-alpha">-->
          <!--  <div class="testimonial-card-top">-->
          <!--    <div class="qoute-icon"><i class="fa fa-quote-left"></i></div>-->
          <!--    <div class="testimonial-thumb">-->
          <!--      <img src="images/r-sm2.png" alt="images" />-->
          <!--    </div>-->
          <!--  </div>-->
          <!--  <div class="testimonial-body">-->
          <!--    <p>-->
          <!--      Duis rutrum nisl urna. Maecenas vel libero this faucibus nisi-->
          <!--      venenatis hendrerit a id lectus.P Suspendissendt molestie turpis-->
          <!--      nec laciniane vehicula volutpat purus.-->
          <!--    </p>-->
          <!--    <div class="testimonial-bottom">-->
          <!--      <div class="reviewer-info">-->
          <!--        <h4 class="reviewer-name">Shwan Pull</h4>-->
          <!--        <h6>Traveller</h6>-->
          <!--      </div>-->
          <!--    </div>-->
          <!--  </div>-->
          <!--</div>-->

          <!--<div class="testimonial-card testimonial-card-alpha">-->
          <!--  <div class="testimonial-card-top">-->
          <!--    <div class="qoute-icon"><i class="fa fa-quote-left"></i></div>-->
          <!--    <div class="testimonial-thumb">-->
          <!--      <img src="images/r-sm3.png" alt="images" />-->
          <!--    </div>-->
          <!--  </div>-->
          <!--  <div class="testimonial-body">-->
          <!--    <p>-->
          <!--      Duis rutrum nisl urna. Maecenas vel libero this faucibus nisi-->
          <!--      venenatis hendrerit a id lectus.P Suspendissendt molestie turpis-->
          <!--      nec laciniane vehicula volutpat purus.-->
          <!--    </p>-->
          <!--    <div class="testimonial-bottom">-->
          <!--      <div class="reviewer-info">-->
          <!--        <h4 class="reviewer-name">Shwan Pull</h4>-->
          <!--        <h6>Traveller</h6>-->
          <!--      </div>-->
          <!--    </div>-->
          <!--  </div>-->
          <!--</div>-->

          <!--<div class="testimonial-card testimonial-card-alpha">-->
          <!--  <div class="testimonial-card-top">-->
          <!--    <div class="qoute-icon"><i class="fa fa-quote-left"></i></div>-->
          <!--    <div class="testimonial-thumb">-->
          <!--      <img src="images/r-sm1.png" alt="images" />-->
          <!--    </div>-->
          <!--  </div>-->
          <!--  <div class="testimonial-body">-->
          <!--    <p>-->
          <!--      Duis rutrum nisl urna. Maecenas vel libero this faucibus nisi-->
          <!--      venenatis hendrerit a id lectus.P Suspendissendt molestie turpis-->
          <!--      nec laciniane vehicula volutpat purus.-->
          <!--    </p>-->
          <!--    <div class="testimonial-bottom">-->
          <!--      <div class="reviewer-info">-->
          <!--        <h4 class="reviewer-name">Shwan Pull</h4>-->
          <!--        <h6>Traveller</h6>-->
          <!--      </div>-->
          <!--    </div>-->
          <!--  </div>-->
          <!--</div>-->
        </div>
      </div>
    </div>

    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
    <script src="js/owl-carousel.js"></script>
    <script src="js/custom.js"></script>
  </body>
</html>
