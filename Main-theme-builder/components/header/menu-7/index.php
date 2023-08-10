<?php 
 include '../../../generic.php';

$menus = getDataApi('menu');
$profile = getDataApi('general');
$social = getDataApi('social');
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
    <link rel="stylesheet" href="../../common_assets/css/slick.css" />
    <link rel="stylesheet" href="css/style.css" />

    <!-- Link js Files -->
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/slick.min.js"></script>
    <script src="js/custom.js"></script>
  </head>

  <body>
    <!-- Header Menu Start -->
    <header class="header-menu bg-white">
      <div class="container">
        <nav class="navbar navbar-expand-lg header-menu-navbar">
          <a
            href="#"
            class="header-menu-plus-icon d-lg-none text-decoration-none"
          >
            <i class="fa-solid fa-plus text-dark"></i>
          </a>
          <a class="navbar-brand" href="#">
            <img src="images/logo.png" alt="" class="img-fluid" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icons"></span>
            <span class="navbar-toggler-icons"></span>
            <span class="navbar-toggler-icons"></span>
          </button>
          <div
            class="collapse navbar-collapse header-menu-collapse"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li class="nav-item">
                <a class="nav-link menu-title header-menu-link" href="#"
                  >Home</a
                >
              </li>
              <li class="nav-item main-dropdown">
                <a
                  class="nav-link dropdown-toggle header-menu-link menu-title"
                  href="#"
                >
                  Group Tour <i class="fa-solid fa-angle-down d-lg-none"></i>
                </a>
                <ul class="header-menu-dropdown">
                  <!-- international Start -->

                  <li class="header-megamenu-box">
                    <a
                      href="#"
                      class="dropdown-item menu-title header-menu-right-arrow"
                      >International <i class="fa-solid fa-angle-right"></i
                    ></a>
                    <ul class="header-megamenu-list">
                        
                         <?php 
                        foreach($menus['group']['International'] as $menu)
                        {
                    ?>
                    
                                          <li class="header-megamenu-item">
                        <a href="#" class="header-megamenu-link menu-title"
                          ><?= $menu['dest_name'] ?></a
                        >
                      </li>

                    
                    <?php } ?>


                      
                    </ul>
                  </li>
                  <!-- international End -->

                  <!--domestic Start -->

                  <li class="header-megamenu-box">
                    <a
                      class="dropdown-item menu-title header-menu-right-arrow"
                      href="#"
                      >Domestic <i class="fa-solid fa-angle-right"></i
                    ></a>
                    <ul
                      class="header-megamenu-list megamenu-tour-list submenu-hotels"
                    >
   <?php 
                        foreach($menus['group']['Domestic'] as $menu)
                        {
                    ?>
                    
                                          <li class="header-megamenu-item">
                        <a href="#" class="header-megamenu-link menu-title"
                          ><?= $menu['dest_name'] ?></a
                        >
                      </li>

                    
                    <?php } ?>


                    </ul>
                  </li>
                  <!-- Domestic End -->
                </ul>
              </li>

              <li class="nav-item main-dropdown">
                <a
                  class="nav-link dropdown-toggle header-menu-link menu-title"
                  href="#"
                >
                  Holiday <i class="fa-solid fa-angle-down d-lg-none"></i>
                </a>
                <ul class="header-menu-dropdown">
                  <!-- international Start -->

                  <li class="header-megamenu-box">
                    <a
                      href="#"
                      class="dropdown-item menu-title header-menu-right-arrow"
                      >International <i class="fa-solid fa-angle-right"></i
                    ></a>
                    <ul class="header-megamenu-list">
                       <?php 
                        foreach($menus['International'] as $menu)
                        {
                    ?>
                    
                                          <li class="header-megamenu-item">
                        <a href="#" class="header-megamenu-link menu-title"
                          ><?= $menu['dest_name'] ?></a
                        >
                      </li>

                    
                    <?php } ?>


                    </ul>
                  </li>
                  <!-- international End -->

                  <!--domestic Start -->

                  <li class="header-megamenu-box">
                    <a
                      class="dropdown-item menu-title header-menu-right-arrow"
                      href="#"
                      >Domestic <i class="fa-solid fa-angle-right"></i
                    ></a>
                    <ul
                      class="header-megamenu-list megamenu-tour-list submenu-hotels"
                    >
   <?php 
                        foreach($menus['Domestic'] as $menu)
                        {
                    ?>
                    
                                          <li class="header-megamenu-item">
                        <a href="#" class="header-megamenu-link menu-title"
                          ><?= $menu['dest_name'] ?></a
                        >
                      </li>

                    
                    <?php } ?>


                    </ul>
                  </li>
                  <!-- Domestic End -->
                </ul>
              </li>

              <li class="nav-item main-dropdown">
                <a
                  class="nav-link dropdown-toggle header-menu-link menu-title"
                  href="#"
                  >Others <i class="fa-solid fa-angle-down d-lg-none"></i
                ></a>
                <ul class="header-menu-dropdown">
                  <li class="header-megamenu-box">
                    <a
                      class="dropdown-item menu-title header-menu-right-arrow"
                      href="#"
                      >Blog Grid <i class="fa-solid fa-angle-right"></i
                    ></a>
                    <ul class="header-megamenu-list megamenu-tour-list">
                      <li class="header-megamenu-item">
                        <a href="#" class="header-megamenu-link menu-title"
                          >Blog Grid Left</a
                        >
                      </li>
                      <li class="header-megamenu-item">
                        <a href="#" class="header-megamenu-link menu-title"
                          >Blog Grid Right</a
                        >
                      </li>
                      <li class="header-megamenu-item">
                        <a href="#" class="header-megamenu-link menu-title"
                          >Blog Grid Center</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="header-megamenu-box">
                    <a
                      class="dropdown-item menu-title header-menu-right-arrow"
                      href="#"
                      >Blog List <i class="fa-solid fa-angle-right"></i
                    ></a>
                    <ul
                      class="header-megamenu-list megamenu-tour-list submenu-hotels"
                    >
                      <li class="header-megamenu-item">
                        <a href="#" class="header-megamenu-link menu-title"
                          >Blog List Left</a
                        >
                      </li>
                      <li class="header-megamenu-item">
                        <a href="#" class="header-megamenu-link menu-title"
                          >Blog List Right</a
                        >
                      </li>
                      <li class="header-megamenu-item">
                        <a href="#" class="header-megamenu-link menu-title"
                          >Blog List Center</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="header-megamenu-box">
                    <a
                      class="dropdown-item menu-title header-menu-right-arrow"
                      href="#"
                      >Blog Details <i class="fa-solid fa-angle-right"></i
                    ></a>
                    <ul
                      class="header-megamenu-list megamenu-tour-list submenu-flight"
                    >
                      <li class="header-megamenu-item">
                        <a href="#" class="header-megamenu-link menu-title"
                          >Blog Details Left</a
                        >
                      </li>
                      <li class="header-megamenu-item">
                        <a href="#" class="header-megamenu-link menu-title"
                          >Blog Details Right</a
                        >
                      </li>
                      <li class="header-megamenu-item">
                        <a href="#" class="header-megamenu-link menu-title"
                          >Blog Details Center</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link menu-title header-menu-link" href="#"
                  >About Us</a
                >
              </li>

              <li class="nav-item">
                <a class="nav-link menu-title header-menu-link" href="#"
                  >Services</a
                >
              </li>

              <li class="nav-item">
                <a class="nav-link menu-title header-menu-link" href="#"
                  >Contact Us</a
                >
              </li>

              <li class="header-menu-btn">
                <a
                  class="btn header-menu-post-btn menu-title text-white"
                  href="#"
                  ><i class="fa-solid fa-plus"></i> <span>Offers</span></a
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <!-- Header Menu End -->
  </body>
</html>
