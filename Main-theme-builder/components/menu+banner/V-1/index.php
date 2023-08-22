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
          <a
            class="hambMenu"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
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
              <li>
                <a href="javascript:void(0)" class="menu-item">About Us</a>
              </li>
              <li>
                <a href="javascript:void(0)" class="menu-item">Services</a>
              </li>
              <li>
                <a href="javascript:void(0)" class="menu-item">Offers</a>
              </li>
              <li>
                <a href="javascript:void(0)" class="menu-item">Enquiry</a>
              </li>
              <!-- Sub Menu -->
              <li>
                <div class="dropdown subMenus">
                  <button
                    class="dropdown-toggle menu-item"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SUBMENUS
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="javascript:void(0)" class="child-menu-item"
                        >Action</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="child-menu-item"
                        >Another action</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="child-menu-item"
                        >Another action</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-md-3 col-3 text-right nopadding">
          <div class="settings">
            <ul>
              <li class="d-none d-sm-block">
                <a href="#" class="menuWithIcon menu-item">
                  <i class="fa-solid fa-lock icon"></i> Login
                </a>
              </li>
              <!-- Sub Menu -->
              <li>
                <div class="dropdown subMenus">
                  <button
                    class="dropdown-toggle menu-item"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    EN
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="javascript:void(0)" class="child-menu-item"
                        >Action</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="child-menu-item"
                        >Another action</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="child-menu-item"
                        >Another action</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
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
        <?php foreach($banner_1 as $banner){
         ?>
        <div class="item sliderItem">
          <img src="<?= BASE_URL_MAIN.$banner ?>" alt="travel" />
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
        <div class="container-fluid mt-5">
          <div class="row">
            <div class="col-md-3 col-sm-6 col-6 mb-3">
              <div class="iconBox">
                <i class="fa-solid fa-car icon"></i>
                <span class="heading">Car</span>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-6 mb-3">
              <div class="iconBox">
                <i class="fa-solid fa-plane-up icon"></i>
                <span class="heading">Flight</span>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-6 mb-3">
              <div class="iconBox">
                <i class="fa-solid fa-hotel icon"></i>
                <span class="heading">Hotel</span>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-6 mb-3">
              <div class="iconBox">
                <i class="fa-solid fa-film icon"></i>
                <span class="heading">Activity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- *** Info Section End *** -->
    </section>
    <!-- *** Slider End *** -->
    <script
      src="https://code.jquery.com/jquery-3.6.3.min.js"
      crossorigin="anonymous"
    ></script>

    <script
      src="../../../CommonFiles/js/bootstrap.bundle.min.js"
      async
      defer
    ></script>
    <script src="../../../CommonFiles/js/slick.min.js" async defer></script>
    <script src="./js/script.js" async defer></script>
  </body>
</html>
