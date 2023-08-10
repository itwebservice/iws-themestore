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
    <section class="people-test">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 align-left heading">
            <h2>People Talking About Us</h2>
          </div>
          <div class="col-12 col-md-12">
            <div class="people-slider owl-carousel">
                      <?php  
            foreach($testi_2 as $data)    
                {
            ?>
              <div class="testimonial-item">
                <div class="image">
                  <img
                    src="<?= BASE_URL_MAIN.$data['filter_img']; ?>"
                    alt="male-4"
                  />
                </div>
                <div class="testimonial-main-content">
                  <div class="content-wrap">
                    <div class="content">
                      <div class="text">
                         <?= $data['testm'] ?>
                      </div>
                    </div>
                    <div class="info">
                      <div class="cite">
                        <h4 class="name"><?= $data['name'] ?></h4>
                        <span class="position"><?= $data['designation'] ?></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <?php } ?>

              <!--<div class="testimonial-item">-->
              <!--  <div class="image">-->
              <!--    <img-->
              <!--      src="https://wp.getgolo.com/restaurant/wp-content/uploads/sites/7/2020/08/male-4.jpg"-->
              <!--      alt="male-4"-->
              <!--    />-->
              <!--  </div>-->
              <!--  <div class="testimonial-main-content">-->
              <!--    <div class="content-wrap">-->
              <!--      <div class="content">-->
              <!--        <div class="text">-->
              <!--          There are very few themes in Themeforest that work 99%-->
              <!--          smoothly, and one of them is "Golo" Simply The Best !!!-->
              <!--        </div>-->
              <!--      </div>-->
              <!--      <div class="info">-->
              <!--        <div class="cite">-->
              <!--          <h4 class="name">John Doe</h4>-->
              <!--          <span class="position">Traverler</span>-->
              <!--        </div>-->
              <!--      </div>-->
              <!--    </div>-->
              <!--  </div>-->
              <!--</div>-->

              <!--<div class="testimonial-item">-->
              <!--  <div class="image">-->
              <!--    <img-->
              <!--      src="https://wp.getgolo.com/restaurant/wp-content/uploads/sites/7/2020/08/male-4.jpg"-->
              <!--      alt="male-4"-->
              <!--    />-->
              <!--  </div>-->
              <!--  <div class="testimonial-main-content">-->
              <!--    <div class="content-wrap">-->
              <!--      <div class="content">-->
              <!--        <div class="text">-->
              <!--          There are very few themes in Themeforest that work 99%-->
              <!--          smoothly, and one of them is "Golo" Simply The Best !!!-->
              <!--        </div>-->
              <!--      </div>-->
              <!--      <div class="info">-->
              <!--        <div class="cite">-->
              <!--          <h4 class="name">John Doe</h4>-->
              <!--          <span class="position">Traverler</span>-->
              <!--        </div>-->
              <!--      </div>-->
              <!--    </div>-->
              <!--  </div>-->
              <!--</div>-->

              <!--<div class="testimonial-item">-->
              <!--  <div class="image">-->
              <!--    <img-->
              <!--      src="https://wp.getgolo.com/restaurant/wp-content/uploads/sites/7/2020/08/male-4.jpg"-->
              <!--      alt="male-4"-->
              <!--    />-->
              <!--  </div>-->
              <!--  <div class="testimonial-main-content">-->
              <!--    <div class="content-wrap">-->
              <!--      <div class="content">-->
              <!--        <div class="text">-->
              <!--          There are very few themes in Themeforest that work 99%-->
              <!--          smoothly, and one of them is "Golo" Simply The Best !!!-->
              <!--        </div>-->
              <!--      </div>-->
              <!--      <div class="info">-->
              <!--        <div class="cite">-->
              <!--          <h4 class="name">John Doe</h4>-->
              <!--          <span class="position">Traverler</span>-->
              <!--        </div>-->
              <!--      </div>-->
              <!--    </div>-->
              <!--  </div>-->
              <!--</div>-->
            </div>
          </div>
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
