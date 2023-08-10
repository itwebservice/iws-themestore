<?php 
include '../../../../generic.php';
$slider_5 = getDataApi('package/popular');
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
    <link
      rel="stylesheet"
      href="../../../common_assets/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="../../../common_assets/css/common-style.css" />
    <link rel="stylesheet" href="../../../common_assets/css/all.min.css" />
    <link rel="stylesheet" href="css/slick-theme.css" />
    <link rel="stylesheet" href="css/slick.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <section class="slider-area cursor-light">
      <div class="bg-overlay"></div>
      <div class="container position-relative">
        <div class="inner-bg-overlay"></div>
        <div class="row">
          <div
            class="slider-detail col-12 col-lg-6 text-center text-lg-left"
          >
              <?php  
            foreach($slider_5 as $data)    
                {
            ?>
            <div class="slider-slide">
              <div class="slider-inner-content">
                <h4 class="slide-heading"><?= substr($data['package_name'],0,30);?></h4>
                <p class="slide-text">
                 <?= $data['destination']['gallery_images'][4]['description'] ?>
                </p>
                <a href="<?= BASE_URL_B2C.$data['file_name_url'] ?>" class="btn anim-btn rounded-pill scroll"
                  >LEARN MORE <span></span><span></span><span></span
                  ><span></span>
                </a>
              </div>
            </div>
            <?php } ?>
       
          </div>
          <div
            class="slider-img col-12 col-lg-6 wow fadeInRight"
            data-wow-delay=".8s"
            data-depth="0.1"
          >
                    <?php  
            foreach($slider_5 as $data)    
                {
            ?>
            <div class="img-slide">
              <img src="<?= $data['main_img_url']  ?>" />
            </div>
            <?php } ?>

          </div>
        </div>
        <div class="slider-arrows">
          <a
            href="javascript:void(0);"
            class="slider-arr slider-arr-up link"
            id="slider-arr-up"
            ><i class="fas fa-angle-up"></i
          ></a>
          <a
            href="javascript:void(0);"
            class="slider-arr slider-arr-down link"
            id="slider-arr-down"
            ><i class="fas fa-angle-down"></i
          ></a>
        </div>
      </div>
      <div class="slider-icons">
        <ul class="slider-social banner-social">
          <li class="animated-wrap">
            <a class="animated-element" href=""
              ><i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="animated-wrap">
            <a class="animated-element" href=""
              ><i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="animated-wrap">
            <a class="animated-element" href=""
              ><i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li class="animated-wrap">
            <a class="animated-element" href=""
              ><i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- Link js Files -->
    <script src="../../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../../common_assets/js/jquery-3.6.0.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/custom.js"></script>
  </body>
</html>
