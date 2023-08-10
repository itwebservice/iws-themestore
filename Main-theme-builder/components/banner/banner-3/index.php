<?php 
 include '../../../generic.php';

$banner_3 = getDataApi('banner');

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
    <link rel="stylesheet" href="css/select2.min.css" />
    <link rel="stylesheet" href="css/jquery.datetimepicker.min.css" />
    <link rel="stylesheet" href="css/style.css" />

    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
    <script src="../../common_assets/js/slick.min.js"></script>
    <script src="js/select2.min.js"></script>
    <script src="js/jquery.datetimepicker.full.min.js"></script>
    <script src="js/custom.js"></script>
  </head>

  <body>
    <!-- Landing Section Start -->
    <section class="landing-banner-section">
      <div class="landing-banner-content position-relative">
        <div class="landing-banner-list">
                 <?php  
            foreach($banner_3 as $data)    
                {
            ?>
          <div class="landing-banner-item">
            <div class="landing-banner-img">
              <img src="<?= BASE_URL_MAIN.$data ?>" alt="" class="img-fluid w-100" />
            </div>
          </div>
          <?php } ?>
          <!--<div class="landing-banner-item">-->
          <!--  <div class="landing-banner-img">-->
          <!--    <img src="images/banner_2.jpg" alt="" class="img-fluid w-100" />-->
          <!--  </div>-->
          <!--</div>-->
          <!--<div class="landing-banner-item">-->
          <!--  <div class="landing-banner-img">-->
          <!--    <img src="images/banner_3.jpg" alt="" class="img-fluid w-100" />-->
          <!--  </div>-->
          <!--</div>-->
          <!--<div class="landing-banner-item">-->
          <!--  <div class="landing-banner-img">-->
          <!--    <img src="images/banner_4.jpg" alt="" class="img-fluid w-100" />-->
          <!--  </div>-->
          <!--</div>-->
          <!--<div class="landing-banner-item">-->
          <!--  <div class="landing-banner-img">-->
          <!--    <img src="images/banner_5.jpg" alt="" class="img-fluid w-100" />-->
          <!--  </div>-->
          <!--</div>-->
        </div>
        <div class="landing-banner-tabs">
          <div class="container">
            <ul class="nav nav-tabs landing-nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="holiday-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#holiday"
                  type="button"
                  role="tab"
                  aria-controls="holiday"
                  aria-selected="true"
                >
                  HOLIDAY
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="group-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#group"
                  type="button"
                  role="tab"
                  aria-controls="group"
                  aria-selected="false"
                >
                  GROUP TOUR
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="hotel-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#hotel"
                  type="button"
                  role="tab"
                  aria-controls="hotel"
                  aria-selected="false"
                >
                  HOTELS
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="activites-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#activites"
                  type="button"
                  role="tab"
                  aria-controls="activites"
                  aria-selected="false"
                >
                  ACTIVITIES
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="transfer-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#transfer"
                  type="button"
                  role="tab"
                  aria-controls="transfer"
                  aria-selected="false"
                >
                  TRANSFER
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="holiday"
                role="tabpanel"
                aria-labelledby="holiday-tab"
              >
                <div class="landing-tab-content landing-holiday-tab">
                  <div class="row align-items-end">
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label>*Select Destination</label>
                        <select class="destination-select form-control">
                          <option></option>
                          <option disabled>
                            Please enter 1 or more characters
                          </option>
                          <option>Singapore</option>
                          <option>Banglore</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label>*Select Tour</label>
                        <select class="tour-select form-control">
                          <option></option>
                          <option disabled>
                            Please enter 1 or more characters
                          </option>
                          <option>Kerala</option>
                          <option>Delhi</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label>*Select Tour Date</label>
                        <span class="landing-calendar-img">
                          <input
                            type="text"
                            class="form-control"
                            id="datetimepicker"
                            placeholder="mm/dd/yy" />
                          <i class="fa-solid fa-calendar-days"></i
                        ></span>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label class="d-block">*Adults</label>
                        <select
                          class="adults-select form-control landing-select-number"
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label class="d-block"
                          >*Child Without Bed(2-5 Yrs)</label
                        >
                        <select
                          class="adults-select form-control landing-select-number"
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label class="d-block"
                          >*Child Without Bed(5-12 Yrs)</label
                        >
                        <select
                          class="adults-select form-control landing-select-number"
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label class="d-block">Extra Bed</label>
                        <select
                          class="adults-select form-control landing-select-number"
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label class="d-block">Infants(0-2 Yrs)</label>
                        <select
                          class="adults-select form-control landing-select-number"
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <a
                        href="#"
                        class="btn btn-success landing-tab-btn landing-holiday-btn"
                        ><i class="fa-solid fa-magnifying-glass"></i
                        ><span> SEARCH NOW</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="group"
                role="tabpanel"
                aria-labelledby="group-tab"
              >
                <div class="landing-tab-content landing-group-tab">
                  <div class="row align-items-end">
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label>*Select Destination</label>
                        <select class="destination-select form-control">
                          <option disabled>
                            Please enter 1 or more characters
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label>*Select Tour</label>
                        <select
                          class="tour-select form-control landing-select-number"
                        >
                          <option></option>
                          <option>*Tour Name</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label>*Select Tour Dates</label>
                        <span class="landing-calendar-img">
                          <input
                            type="text"
                            class="form-control"
                            id="datetimepicker1"
                            placeholder="*Tour Date" />
                          <i class="fa-solid fa-calendar-days"></i
                        ></span>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label class="d-block">*Adults</label>
                        <select
                          class="adults-select form-control landing-select-number"
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label class="d-block"
                          >*Child Without Bed(2-5 Yrs)</label
                        >
                        <select
                          class="adults-select form-control landing-select-number"
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label class="d-block"
                          >*Child Without Bed(5-12 Yrs)</label
                        >
                        <select
                          class="adults-select form-control landing-select-number"
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label class="d-block">Extra Bed</label>
                        <select
                          class="adults-select form-control landing-select-number"
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label class="d-block">Infants(0-2 Yrs)</label>
                        <select
                          class="adults-select form-control landing-select-number"
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <a
                        href="#"
                        class="btn btn-success landing-tab-btn landing-holiday-btn"
                        ><i class="fa-solid fa-magnifying-glass"></i
                        ><span> SEARCH NOW</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="hotel"
                role="tabpanel"
                aria-labelledby="hotel-tab"
              >
                <div class="landing-tab-content landing-hotel-tab">
                  <div class="row align-items-end">
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label>Select City</label>
                        <select class="city-select form-control">
                          <option></option>
                          <option>Aarhus Denmark</option>
                          <option>Abau Himachal Pradesh</option>
                          <option>Abbotsford Himachal Pradesh</option>
                          <option>Abbottabad Karnataka</option>
                          <option>Abeche Chad</option>
                          <option>Abecher Madhya Pradesh</option>
                          <option>Aberdeen United Kingdom</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label>Select Hotel Name</label>
                        <select class="hotel-select form-control">
                          <option></option>
                          <option disabled>
                            Please enter 1 or more characters
                          </option>
                          <option>Tulsi</option>
                          <option>Amiras</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label>*<label>*Check In</label></label>
                        <span class="landing-calendar-img">
                          <input
                            type="text"
                            class="form-control"
                            id="datetimepicker"
                            placeholder="mm/dd/yy" />
                          <i class="fa-solid fa-calendar-days"></i
                        ></span>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label>*<label>*Check out</label></label>
                        <span class="landing-calendar-img">
                          <input
                            type="text"
                            class="form-control"
                            id="datetimepicker"
                            placeholder="mm/dd/yy" />
                          <i class="fa-solid fa-calendar-days"></i
                        ></span>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label class="d-block"
                          >*Child Without Bed(2-5 Yrs)</label
                        >
                        <input
                          type="number"
                          class="form-control"
                          placeholder="Total Rooms"
                        />
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector landing-hotel-review">
                        <label class="d-block">Infants(0-2 Yrs)</label>
                        <div
                          class="form-check form-check-inline landing-review-cheked"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="c1"
                            value="1"
                            name="star_category"
                          />
                          <label
                            class="form-check-label"
                            role="button"
                            for="c1"
                          >
                            1 <i class="fa-solid fa-star"></i>
                          </label>
                        </div>
                        <div
                          class="form-check form-check-inline landing-review-cheked"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="c12"
                            value="1"
                            name="star_category"
                          />
                          <label
                            class="form-check-label"
                            role="button"
                            for="c12"
                          >
                            2 <i class="fa-solid fa-star"></i>
                          </label>
                        </div>
                        <div
                          class="form-check form-check-inline landing-review-cheked"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="c13"
                            value="1"
                            name="star_category"
                          />
                          <label
                            class="form-check-label"
                            role="button"
                            for="c13"
                          >
                            3 <i class="fa-solid fa-star"></i>
                          </label>
                        </div>
                        <div
                          class="form-check form-check-inline landing-review-cheked"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="c14"
                            value="1"
                            name="star_category"
                          />
                          <label
                            class="form-check-label"
                            role="button"
                            for="c14"
                          >
                            4 <i class="fa-solid fa-star"></i>
                          </label>
                        </div>
                        <div
                          class="form-check form-check-inline landing-review-cheked"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="c15"
                            value="1"
                            name="star_category"
                          />
                          <label
                            class="form-check-label"
                            role="button"
                            for="c15"
                          >
                            5 <i class="fa-solid fa-star"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <a
                        href="#"
                        class="btn btn-success landing-tab-btn landing-group-btn"
                        ><i class="fa-solid fa-magnifying-glass"></i
                        ><span> SEARCH NOW</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="activites"
                role="tabpanel"
                aria-labelledby="activites-tab"
              >
                <div class="landing-tab-content landing-activites-tab">
                  <div class="row align-items-end">
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label>Select City</label>
                        <select class="city-select form-control">
                          <option></option>
                          <option>Aarhus Denmark</option>
                          <option>Abau Himachal Pradesh</option>
                          <option>Abbotsford Himachal Pradesh</option>
                          <option>Abbottabad Karnataka</option>
                          <option>Abeche Chad</option>
                          <option>Abecher Madhya Pradesh</option>
                          <option>Aberdeen United Kingdom</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label>Select Activity</label>
                        <select class="activity-select form-control">
                          <option></option>
                          <option disabled>
                            Please enter 1 or more characters
                          </option>
                          <option>Adventour</option>
                          <option>Mind the Gap</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label>*Select Date</label>
                        <span class="landing-calendar-img">
                          <input
                            type="text"
                            class="form-control"
                            id="datetimepicker"
                            placeholder="mm/dd/yy" />
                          <i class="fa-solid fa-calendar-days"></i
                        ></span>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label class="d-block">*Adults</label>
                        <select
                          class="adults-select form-control landing-select-number"
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label class="d-block">Children(2-12 Yrs)</label>
                        <select
                          class="adults-select form-control landing-select-number"
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option>16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <div class="landing-tab-selector">
                        <label class="d-block">Infants(0-2 Yrs)</label>
                        <select
                          class="adults-select form-control landing-select-number"
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option>16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3">
                      <a
                        href="#"
                        class="btn btn-success landing-tab-btn landing-group-btn"
                        ><i class="fa-solid fa-magnifying-glass"></i
                        ><span> SEARCH NOW</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="transfer"
                role="tabpanel"
                aria-labelledby="transfer-tab"
              >
                <div class="landing-tab-content landing-transfer-tab">
                  <div class="row align-items-end">
                    <div class="col-12">
                      <div class="radioCheck">
                        <div class="sect s1">
                          <input
                            type="radio"
                            value="oneway"
                            id="oneway"
                            name="transfer_type"
                            class="radio_txt transfer_type"
                            checked
                          />
                          <label for="oneway" role="button" class="radio_lbl"
                            >One Way</label
                          >
                        </div>
                        <div class="sect s2">
                          <input
                            type="radio"
                            value="roundtrip"
                            id="roundtrip"
                            name="transfer_type"
                            class="radio_txt transfer_type"
                          />
                          <label for="roundtrip" role="button" class="radio_lbl"
                            >Round Trip</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-4 col-xl-4">
                      <div class="landing-tab-selector landing-transfer-select">
                        <label>Pickup Location*</label>
                        <select class="pickup-select form-control">
                          <option></option>
                          <option disabled>
                            Please enter 1 or more characters
                          </option>
                          <option>Rajasthan</option>
                          <option>Tamil Nadu</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-4 col-xl-4">
                      <div class="landing-tab-selector landing-transfer-select">
                        <label>Pickup Date&Time*</label>
                        <span class="landing-calendar-img">
                          <input
                            type="text"
                            class="form-control"
                            id="datetimepickerhours"
                            placeholder="mm/dd/yy H:i" />
                          <i class="fa-solid fa-calendar-days"></i
                        ></span>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-4 col-xl-4">
                      <div class="landing-tab-selector landing-transfer-select">
                        <label class="d-block">Total Passengers*</label>
                        <input
                          type="number"
                          class="form-control"
                          placeholder="Total Passengers"
                        />
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-4 col-xl-4">
                      <div class="landing-tab-selector landing-transfer-select">
                        <label>Drop-Off Location*</label>
                        <select class="drop-select form-control">
                          <option></option>
                          <option disabled>
                            Please enter 1 or more characters
                          </option>
                          <option>Delhi</option>
                          <option>Mumbai</option>
                        </select>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-4 col-xl-4">
                      <div class="landing-tab-selector landing-transfer-select">
                        <label>Return Date&Time</label>
                        <span class="landing-calendar-img">
                          <input
                            type="text"
                            class="form-control"
                            id="datetimepickerhours1"
                            placeholder="mm/dd/yy H:i" />
                          <i class="fa-solid fa-calendar-days"></i
                        ></span>
                      </div>
                    </div>
                    <div class="col col-12 col-md-4 col-lg-4 col-xl-4">
                      <a
                        href="#"
                        class="btn btn-success landing-tab-btn landing-group-btn landing-transfer-btn"
                        ><i class="fa-solid fa-magnifying-glass"></i
                        ><span> SEARCH NOW</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Landing Section End -->
  </body>
</html>
