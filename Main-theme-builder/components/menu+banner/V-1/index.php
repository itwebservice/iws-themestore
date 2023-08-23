<?php
include '../../../generic.php';

$banner_1 = getDataApi('banner');
// var_dump($banner_1);  

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="description" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>iTours Component :: Banner</title>
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
        <a class="hambMenu" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          <i class="fa-solid fa-bars icon"></i>
        </a>
      </div>
      <div class="col-md-2 col-8 nopadding">
        <div class="logo">
          <a href="#">
            <img src="./images/logo.png" alt="'logo" />
          </a>
        </div>
      </div>
      <div class="col-md-7 col-sm-2 d-sm-none d-none d-md-block nopadding">
        <nav class="menus">
          <ul>
            <li>
              <a href="javascript:void(0)" class="menu-item">Home</a>
            </li>
            <div class="dropdown subMenus">
              <button class="dropdown-toggle menu-item" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Group tour
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
            <li>
              <a href="javascript:void(0)" class="menu-item">Hotels</a>
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
            <div class="dropdown subMenus">
              <button class="dropdown-toggle menu-item" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Others
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
          </ul>
        </nav>
      </div>
      <div class="col-md-3 col-3 text-right nopadding">
        <div class="settings">
          <ul>
            <li class="d-none d-sm-block">
              <a href="#" class="menuWithIcon menu-item">
                Offers
              </a>
            </li>
            <!-- Sub Menu -->
            <li>
              <div class="dropdown subMenus">
                <button class="dropdown-toggle menu-item" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  EN
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a href="javascript:void(0)" class="child-menu-item">Action</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="child-menu-item">Another action</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" class="child-menu-item">Another action</a>
                  </li>
                </ul>
              </div>
            </li>
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
              <a href="#"><i class="fa-solid fa-house me-3"></i>Home</a>
            </li>
            <li>
              <a href="#"><i class="fa-solid fa-user me-3"></i>About Us</a>
            </li>
            <li>
              <a href="#"><i class="fa-solid fa-gear me-3"></i>Services</a>
            </li>
            <li>
              <a href="#"><i class="fa-solid fa-tag me-3"></i>Offers</a>
            </li>
            <li>
              <a href="#"><i class="fa-solid fa-phone me-3"></i>Enquiry</a>
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
    <div class="banner-slider-01 pageSlider d-none d-md-block">
      <?php foreach ($banner_1 as $banner) {
      ?>
        <div class="item sliderItem">
          <img src="<?= BASE_URL_MAIN . $banner ?>" alt="travel" />
        </div>
      <?php
      } ?>
    </div>
    <!-- *** Slider End *** -->

    <!-- *** Info Section *** -->
    <div class="info-section">
      <h1 class="c-heading h1 text-center mb-4">
        FIND THE BEST PLACES TO BE
      </h1>
      <h2 class="c-heading h2 text-center mb-2">
        All the top locations – from restaurants and clubs, to cinemas,
        galleries, and more.
      </h2>
    </div>
    <!-- *** Info Section End *** -->
  </section>
  <!-- *** Slider End *** -->
  <script src="https://code.jquery.com/jquery-3.6.3.min.js" crossorigin="anonymous"></script>

  <script src="../../../CommonFiles/js/bootstrap.bundle.min.js" async defer></script>
  <script src="../../../CommonFiles/js/slick.min.js" async defer></script>
  <script src="./js/script.js" async defer></script>
</body>

</html>