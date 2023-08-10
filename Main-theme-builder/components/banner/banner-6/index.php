<?php 
 include '../../../generic.php';

$banner_6 = getDataApi('banner');

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
    <link rel="stylesheet" href="../../common_assets/css/common-style.css" />
    <link rel="stylesheet" href="css/animate.css" />
    <link rel="stylesheet" href="css/owl.carousel.css" />
    <link rel="stylesheet" href="css/owl.theme.default.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="home">
      <!-- Home Slider -->

      <div class="home_slider_container">
        <div class="owl-carousel owl-theme home_slider">
            <?php  
            foreach($banner_6 as $data)    
                {
            ?>
          <!-- Slider Item -->
          <div class="owl-item home_slider_item">
            <!-- Image by https://unsplash.com/@anikindimitry -->
            <div
              class="home_slider_background"
            >
                <img src="<?= BASE_URL_MAIN.$data ?>" />
            </div>

            <div class="home_slider_content text-center">
              <div
                class="home_slider_content_inner"
                data-animation-in="flipInX"
                data-animation-out="animate-out fadeOut"
              >
                <h1>discover</h1>
                <h1>the world</h1>
                <!-- <div class="button home_slider_button">
                  <div class="button_bcg"></div>
                  <a href="#"
                    >explore now<span></span><span></span><span></span
                  ></a>
                </div> -->
              </div>
            </div>
          </div>
          <?php } ?>
        </div>

        <!-- Home Slider Nav - Prev -->
        <div class="home_slider_nav home_slider_prev">
          <svg
            version="1.1"
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="28px"
            height="33px"
            viewBox="0 0 28 33"
            enable-background="new 0 0 28 33"
            xml:space="preserve"
          >
            <defs>
              <linearGradient id="home_grad_prev">
                <stop offset="0%" stop-color="#fa9e1b" />
                <stop offset="100%" stop-color="#8d4fff" />
              </linearGradient>
            </defs>
            <path
              class="nav_path"
              fill="#F3F6F9"
              d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
            M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
            C22.545,2,26,5.541,26,9.909V23.091z"
            />
            <polygon
              class="nav_arrow"
              fill="#F3F6F9"
              points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
            11.042,18.219 "
            />
          </svg>
        </div>

        <!-- Home Slider Nav - Next -->
        <div class="home_slider_nav home_slider_next">
          <svg
            version="1.1"
            id="Layer_3"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="28px"
            height="33px"
            viewBox="0 0 28 33"
            enable-background="new 0 0 28 33"
            xml:space="preserve"
          >
            <defs>
              <linearGradient id="home_grad_next">
                <stop offset="0%" stop-color="#fa9e1b" />
                <stop offset="100%" stop-color="#8d4fff" />
              </linearGradient>
            </defs>
            <path
              class="nav_path"
              fill="#F3F6F9"
              d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
          M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
          C22.545,2,26,5.541,26,9.909V23.091z"
            />
            <polygon
              class="nav_arrow"
              fill="#F3F6F9"
              points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
          17.046,15.554 "
            />
          </svg>
        </div>

        <!-- Home Slider Dots -->

      </div>
    </div>

    <!-- Search -->

    <div class="search">
      <!-- Search Contents -->

      <div class="container fill_height">
        <div class="row fill_height">
          <div class="col fill_height">
            <!-- Search Tabs -->

            <div class="search_tabs_container">
              <div
                class="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
              >
                <div
                  class="search_tab active d-flex flex-row align-items-center justify-content-lg-center justify-content-start"
                >
                  <img src="images/suitcase.png" alt="" /><span>Holiday</span>
                </div>
                <div
                  class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"
                >
                  <img src="images/bus.png" alt="" />Group Tour
                </div>
                <div
                  class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"
                >
                  <img src="images/departure.png" alt="" />Hotels
                </div>
                <div
                  class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"
                >
                  <img src="images/diving.png" alt="" />Activities
                </div>
                <div
                  class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"
                >
                  <img src="images/car.png" alt="" />Transfer
                </div>
              </div>
            </div>

            <!-- Search Panel -->

            <div class="search_panel active">
              <form
                action="#"
                id="search_form_1"
                class="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
              >
                <div class="row">
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Destination</div>
                      <input
                        type="text"
                        class="destination search_input"
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Tour</div>
                      <input
                        type="text"
                        class="destination search_input"
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Travel date</div>
                      <input
                        type="date"
                        class="check_out search_input"
                        placeholder="YYYY-MM-DD"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Adults</div>
                      <select
                        name="adults"
                        id="adults_1"
                        class="dropdown_item_select search_input"
                      >
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Child without bed</div>
                      <select
                        name="children"
                        id="children_1"
                        class="dropdown_item_select search_input"
                      >
                        <option>0</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Child with bed</div>
                      <select
                        name="children"
                        id="children_1"
                        class="dropdown_item_select search_input"
                      >
                        <option>0</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Extra bed</div>
                      <select
                        name="children"
                        id="children_1"
                        class="dropdown_item_select search_input"
                      >
                        <option>0</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Infants</div>
                      <select
                        name="children"
                        id="children_1"
                        class="dropdown_item_select search_input"
                      >
                        <option>0</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <button class="button search_button">
                      search<span></span><span></span><span></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <!-- Search Panel -->

            <div class="search_panel">
              <form
                action="#"
                id="search_form_2"
                class="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
              >
                <div class="row">
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Holiday</div>
                      <input
                        type="text"
                        class="destination search_input"
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Tour</div>
                      <input
                        type="text"
                        class="destination search_input"
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Travel date</div>
                      <input
                        type="date"
                        class="check_out search_input"
                        placeholder="YYYY-MM-DD"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Adults</div>
                      <select
                        name="adults"
                        id="adults_1"
                        class="dropdown_item_select search_input"
                      >
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Child without bed</div>
                      <select
                        name="children"
                        id="children_1"
                        class="dropdown_item_select search_input"
                      >
                        <option>0</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Child with bed</div>
                      <select
                        name="children"
                        id="children_1"
                        class="dropdown_item_select search_input"
                      >
                        <option>0</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Extra bed</div>
                      <select
                        name="children"
                        id="children_1"
                        class="dropdown_item_select search_input"
                      >
                        <option>0</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Infants</div>
                      <select
                        name="children"
                        id="children_1"
                        class="dropdown_item_select search_input"
                      >
                        <option>0</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <button class="button search_button">
                      search<span></span><span></span><span></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <!-- Search Panel -->

            <div class="search_panel">
              <form
                action="#"
                id="search_form_3"
                class="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
              >
                <div class="row">
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Select city</div>
                      <input
                        type="text"
                        class="destination search_input"
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Hotel name</div>
                      <input
                        type="text"
                        class="destination search_input"
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>check in</div>
                      <input
                        type="date"
                        class="check_in search_input"
                        placeholder="YYYY-MM-DD"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>check out</div>
                      <input
                        type="date"
                        class="check_out search_input"
                        placeholder="YYYY-MM-DD"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Total rooms</div>
                      <select
                        name="adults"
                        id="adults_4"
                        class="dropdown_item_select search_input"
                      >
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <button class="button search_button">
                      search<span></span><span></span><span></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <!-- Search Panel -->

            <div class="search_panel">
              <form
                action="#"
                id="search_form_4"
                class="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
              >
                <div class="row">
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Select city</div>
                      <select
                        name="adults"
                        id="adults_4"
                        class="dropdown_item_select search_input"
                        placeholder="City name"
                      >
                        <option>Singapore</option>
                        <option>Mumbai</option>
                        <option>Pune</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Select Activity</div>
                      <select
                        name="adults"
                        id="adults_4"
                        class="dropdown_item_select search_input"
                        placeholder="City name"
                      >
                        <option>Ride</option>
                        <option>sport</option>
                        <option>swim</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Select date</div>
                      <input
                        type="date"
                        class="check_out search_input"
                        placeholder="YYYY-MM-DD"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>adults</div>
                      <select
                        name="adults"
                        id="adults_4"
                        class="dropdown_item_select search_input"
                      >
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>children</div>
                      <select
                        name="children"
                        id="children_4"
                        class="dropdown_item_select search_input"
                      >
                        <option>0</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Infants</div>
                      <select
                        name="children"
                        id="children_4"
                        class="dropdown_item_select search_input"
                      >
                        <option>0</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <button class="button search_button">
                      search<span></span><span></span><span></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <!-- Search Panel -->

            <div class="search_panel">
              <form
                action="#"
                id="search_form_5"
                class="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
              >
                <div class="row">
                  <div class="col-md-4 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Pickup</div>
                      <input
                        type="text"
                        class="destination search_input"
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Pickup date&time</div>
                      <input
                        type="date"
                        class="check_in search_input"
                        placeholder="YYYY-MM-DD"
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Total passenger</div>
                      <select
                        name="adults"
                        id="adults_5"
                        class="dropdown_item_select search_input"
                      >
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Drop location</div>
                      <input
                        type="text"
                        class="destination search_input"
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 col-12">
                    <div class="search_item">
                      <div>Return date&time</div>
                      <input
                        type="date"
                        class="check_in search_input"
                        placeholder="YYYY-MM-DD"
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-12">
                    <button class="button search_button">
                      search<span></span><span></span><span></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <!-- Search Panel -->
          </div>
        </div>
      </div>
    </div>

    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
    <script src="js/owl.carousel.js"></script>
    <script src="js/custom.js"></script>
  </body>
</html>
