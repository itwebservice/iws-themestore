<?php 
 include '../../../generic.php';

$banner_4 = getDataApi('banner');
// var_dump($banner_3);

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>iTours Component :: Banner 4</title>
    <link rel="stylesheet" href="../../../CommonFiles/css/all.min.css" />
    <link rel="stylesheet" href="../../../CommonFiles/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../CommonFiles/css/slick.css" />
    <link
      rel="stylesheet"
      type="text/css"
      href="../../../CommonFiles/css/slimmenu.min.css"
    />
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <!-- *** Header *** -->
    <header class="c-header">
      <div class="row align-items-center g-0 menuBar">
        <div class="col-1 d-md-none d-sm-block p-0 nopadding">
          <a
            class="hamburgerMenu"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <i class="fa-solid fa-align-left"></i>
          </a>
        </div>
        <div class="col-md-2 col-9 nopadding">
          <div class="logo">
            <a href="javascript:void(0)">
              <img src="./images/logo.webp" alt="logo" class="light" />
              <img src="./images/logo-dark.webp" alt="logo" class="dark" />
            </a>
          </div>
        </div>
        <div
          class="col-md-9 col-sm-2 d-sm-none d-none d-md-block nopadding text-right"
        >
          <nav class="menus">
            <ul class="js-customMenuBar slimmenu">
              <li>
                <a href="#" class="menu-item active">Home</a>
              </li>
              <li><a href="#" class="menu-item">Hotel</a></li>
              <li>
                <a href="#" class="menu-item">Activities</a>
                <ul>
                  <li>
                    <a href="#" class="menu-item">Sub Menu 1</a>
                  </li>
                  <li><a href="#" class="menu-item">Sub Menu 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-md-1 col-2 nopadding">
          <a href="javascript:void(0)" class="link-button float-right">Login</a>
        </div>
      </div>

      <!-- Mobile Menubar :: Sidebar -->
      <div
        class="offcanvas offcanvas-start c-sidebar"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <nav class="mobile-menu">
            <ul>
              <li>
                <a href="javascript:void(0)" class="menu-item"
                  ><i class="fa-solid fa-house me-3"></i>Home</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" class="menu-item"
                  ><i class="fa-solid fa-user me-3"></i>About Us</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" class="menu-item"
                  ><i class="fa-solid fa-gear me-3"></i>Services</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" class="menu-item"
                  ><i class="fa-solid fa-tag me-3"></i>Offers</a
                >
              </li>
              <li>
                <a href="javascript:void(0)" class="menu-item"
                  ><i class="fa-solid fa-phone me-3"></i>Enquiry</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- Mobile Menubar :: Sidebar End -->
    </header>
    <!-- *** Header End *** -->

    <!-- *** Slider *** -->
    <section class="c-banner type-01">
      <!-- *** Slider *** -->
      <div class="banner-slider-02 pageSlider">
      <?php foreach($banner_4 as $banner){
         ?>
        <div class="item sliderItem">
          <img src="<?= BASE_URL_MAIN.$banner ?>" alt="travel" />
          <!-- *** Info Section *** -->
          <div class="info-section">
            <h2 class="c-heading h1 mb-4">
              Breathing life into brands through stunning design
            </h2>
            <h3 class="c-heading h2 mb-2">In a rustic country setting.</h3>
            <button class="c-button">Book Now</button>
          </div>
          <!-- *** Info Section End *** -->
        </div>
        <?php 
        } ?>
      </div>
      <!-- *** Slider End *** -->
    </section>
    <!-- *** Slider End *** -->

    <section class="c-banner type-01">test</section>
    <script
      src="https://code.jquery.com/jquery-3.6.3.min.js"
      crossorigin="anonymous"
    ></script>
    <script src="../../../CommonFiles/js/bootstrap.bundle.min.js"></script>
    <script src="../../../CommonFiles/js/slick.min.js"></script>
    <script src="../../../CommonFiles/js/jquery.slimmenu.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="./js/script.js"></script>
  </body>
</html>
