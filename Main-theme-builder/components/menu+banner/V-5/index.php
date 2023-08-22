<?php 
 include '../../../generic.php';

$banner_5 = getDataApi('banner');
// var_dump($banner_3);

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
    <link
      rel="stylesheet"
      href="../../../CommonFiles/css/bootstrap-datepicker.min.css"
    />
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <!-- *** Header *** -->
    <header class="headerWrapper">
      <div class="c-headerTop d-none d-md-block">
        <div class="headerTop-grid">
          <!-- Language Dropdown -->
          <div class="headerTop-grid-col">
            <div class="dropdown isClean">
              <button
                class="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                EN
              </button>
              <ul class="dropdown-menu">
                <li><button class="dropdown-item active">EN</button></li>
                <li><button class="dropdown-item">MY</button></li>
              </ul>
            </div>
          </div>
          <!-- Language Dropdown End -->

          <!-- Country Dropdown -->
          <div class="headerTop-grid-col">
            <div class="dropdown isClean">
              <button
                class="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                India
              </button>
              <ul class="dropdown-menu">
                <li>
                  <button class="dropdown-item active">United State</button>
                </li>
                <li><button class="dropdown-item">South Africa</button></li>
              </ul>
            </div>
          </div>
          <!-- Country Dropdown End -->

          <!-- Currency Dropdown -->
          <div class="headerTop-grid-col">
            <div class="dropdown isClean">
              <button
                class="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                USD
              </button>
              <ul class="dropdown-menu">
                <li><button class="dropdown-item active">USD</button></li>
                <li><button class="dropdown-item">INR</button></li>
              </ul>
            </div>
          </div>
          <!-- Currency Dropdown End -->

          <div class="headerTop-grid-col">
            <span class="c-heading staticText font-color">
              Phone : <strong> +91 3434 1057 57</strong>
            </span>
          </div>
        </div>
      </div>
      <div class="c-header">
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
          <div class="col-md-2 col-9 nopadding">
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
                  <a href="javascript:void(0)" class="menu-item active">Home</a>
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
                      SubMenu
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
          <div class="col-md-3 col-2 text-right nopadding">
            <div class="settings">
              <ul>
                <li>
                  <a href="#" class="menuWithIcon menu-item">
                    <i class="fa-solid fa-lock icon"></i> Login
                  </a>
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
      </div>
    </header>
    <!-- *** Header End *** -->

    <!-- *** Slider *** -->
    
    <section
      class="c-banner type-02"
      <?php foreach($banner_5 as $banner){
         ?>
      style="background-image: url('<?= BASE_URL_MAIN.$banner ?>')"
      <?php 
        } ?>
    >
      <div class="info-section">
        <div class="bannerLogo-section">
          <a href="index.html">
            <img alt="" src="./images/banner-logo.png" />
          </a>
          <span class="color-white">TRAVEL AGENCY</span>
          <img src="./images/wave-border-2.png" alt="" />
        </div>
        <div class="tabPanel searchTabPanel">
          <ul
            class="nav nav-tabs justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                <i class="fa-solid fa-hotel icon"></i>
                Hotel
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                <i class="fa-solid fa-plane-up icon"></i>
                Flights
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                <i class="fa-solid fa-film icon"></i>
                Activities
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <div class="row gy-4">
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <div class="c-formField">
                    <div class="formField">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Destination"
                      />
                    </div>
                    <i class="fa-solid fa-location-dot icon"></i>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                  <div class="c-formField">
                    <div class="formField">
                      <input
                        type="text"
                        class="form-control js-datepicker"
                        placeholder="Check In"
                      />
                    </div>
                    <i class="fa-solid fa-calendar-days icon"></i>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                  <div class="c-formField">
                    <div class="formField">
                      <input
                        type="text"
                        class="form-control js-datepicker"
                        placeholder="Check Out"
                      />
                    </div>
                    <i class="fa-solid fa-calendar-days icon"></i>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                  <div class="c-formField">
                    <div class="formField">
                      <select
                        class="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option selected>Adults</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                  <div class="c-formField">
                    <div class="formField">
                      <select
                        class="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option selected>Kids</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                  <div class="c-formField">
                    <div class="formField">
                      <select
                        class="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option selected>Rooms</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-12 col-xs-12">
                  <div class="d-grid gap-2">
                    <button type="button" class="btn btn-warning">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- *** Slider End *** -->
    <script
      src="https://code.jquery.com/jquery-3.6.3.min.js"
      crossorigin="anonymous"
    ></script>
    <script src="../../../CommonFiles/js/bootstrap.bundle.min.js"></script>
    <script src="../../../CommonFiles/js/bootstrap-datepicker.min.js"></script>
    <script src="./js/script.js"></script>
  </body>
</html>