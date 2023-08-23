<?php
include '../../../generic.php';

$banner_3 = getDataApi('banner');
// var_dump($banner_3);

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="description" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>iTours Component :: Banner 2</title>
  <link rel="stylesheet" href="../../../CommonFiles/css/all.min.css" />
  <link rel="stylesheet" href="../../../CommonFiles/css/bootstrap.min.css" />
  <link rel="stylesheet" href="../../../CommonFiles/css/slick.css" />
  <link rel="stylesheet" href="./css/styles.css" />
</head>

<body>
  <!-- *** Header *** -->
  <header class="c-header">
    <div class="row align-items-center g-0 menuBar">
      <div class="col-1 d-md-none d-sm-block p-0 nopadding">
        <a class="hamburgerMenu" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          <i class="fa-solid fa-bars icon"></i>
        </a>
      </div>
      <div class="col-md-2 col-9 nopadding">
        <div class="logo">
          <a href="javascript:void(0)" class="menu-item">
            <img src="./images/dark-logo.png" alt="'logo" />
          </a>
        </div>
      </div>
      <div class="col-md-8 col-sm-2 d-sm-none d-none d-md-block nopadding">
        <nav class="menus">
          <ul>
            <li class="active">
              <a href="javascript:void(0)" class="menu-item active">Home</a>
            </li>
            <li>
              <div class="dropdown subMenus">
                <button class="dropdown-toggle menu-item" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Group tours
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a href="javascript:void(0)" class="child-menu-item">Demo tour</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="child-menu-item">Demo tour</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div class="dropdown subMenus">
                <button class="dropdown-toggle menu-item" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Holiday
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a href="javascript:void(0)" class="child-menu-item">Demo tour</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="child-menu-item">Demo tour</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="javascript:void(0)" class="menu-item">Hotel</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="menu-item">Activities</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="menu-item">Visa</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="menu-item">Transfer</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="menu-item">Cruise</a>
            </li>
            <!-- Sub Menu -->
            <li>
              <div class="dropdown subMenus">
                <button class="dropdown-toggle menu-item" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Other
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a href="javascript:void(0)" class="child-menu-item">Services</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="child-menu-item">Contact us</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-md-2 col-2 text-right nopadding">
        <div class="settings">
          <ul>
            <li class="d-none d-sm-block">
              <a href="javascript:void(0)" class="menuWithIcon menu-item">
                Offers
              </a>
            </li>
            <!-- Sub Menu -->
          </ul>
        </div>
      </div>
    </div>

    <!-- Mobile Menubar :: Sidebar -->
    <div class="offcanvas offcanvas-start c-sidebar" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <nav class="mobile-menu">
          <ul>
            <li>
              <a href="javascript:void(0)" class="menu-item"><i class="fa-solid fa-house me-3"></i>Home</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="menu-item"><i class="fa-solid fa-user me-3"></i>About Us</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="menu-item"><i class="fa-solid fa-gear me-3"></i>Services</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="menu-item"><i class="fa-solid fa-tag me-3"></i>Offers</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="menu-item"><i class="fa-solid fa-phone me-3"></i>Enquiry</a>
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
      <?php foreach ($banner_3 as $banner) {
      ?>
        <div class="item sliderItem">
          <img src="<?= BASE_URL_MAIN . $banner ?>" alt="travel" />
          <!-- *** Info Section *** -->
          <div class="info-section">
            <h2 class="c-heading h1 text-center mb-4">
              Enjoy a beautiful stay.
            </h2>
            <h3 class="c-heading h2 text-center mb-2">
              In a rustic country setting.
            </h3>
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
  <script src="https://code.jquery.com/jquery-3.6.3.slim.min.js" integrity="sha256-ZwqZIVdD3iXNyGHbSYdsmWP//UBokj2FHAxKuSBKDSo=" crossorigin="anonymous"></script>
  <script src="../../../CommonFiles/js/bootstrap.bundle.min.js" async defer></script>
  <script src="../../../CommonFiles/js/slick.min.js" async defer></script>
  <script src="./js/script.js" async defer></script>
</body>

</html>