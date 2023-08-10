<?php 
include '../../../generic.php';
$data = getDataApi('destination');
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
    <link rel="stylesheet" href="../../common_assets/css/common-style.css" />
    <link rel="stylesheet" href="../../common_assets/css/all.min.css" />
    <link rel="stylesheet" href="css/style.css" />

    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
  </head>

  <body>
    <section class="trending pb-3 pt-0">
      <div class="container">
        <div class="section-title mb-6 mx-auto text-center">
          <h2 class="mb-1">
            Explore <span class="theme">Top Destinations</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-7">
            <div class="row">
              <div class="col-lg-12 mb-4">
                <div class="trend-item1">
                  <div class="trend-image position-relative rounded">
                    <img src="<?= $data[0]['gallery_images'][4]['image_url'] ?>" alt="image" />
                    <div
                      class="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index"
                    >
                      <div class="trend-content-title">
                        <h5 class="mb-0">
                          <!--<a href="tour-grid.html" class="theme1"></a>-->
                        </h5>
                        <h3 class="mb-0 white"><?= $data[0]['dest_name'] ?></h3>
                      </div>
                      <span class="white bg-theme p-1 px-2 rounded"
                        ><?= $data[0]['total_packages'] ?> Tours</span
                      >
                    </div>
                    <div class="color-overlay"></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 mb-4">
                <div class="trend-item1">
                  <div class="trend-image position-relative rounded">
                    <img src="<?= $data[1]['gallery_images'][4]['image_url'] ?>" alt="image" />
                    <div
                      class="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100"
                    >
                      <div class="trend-content-title">
                        <h5 class="mb-0">
                          <!--<a href="tour-grid.html" class="theme1">Moscow</a>-->
                        </h5>
                        <h3 class="mb-0 white"><?= $data[1]['dest_name'] ?></h3>
                      </div>
                      <span class="white bg-theme p-1 px-2 rounded"
                        ><?= $data[1]['total_packages'] ?> Tours</span
                      >
                    </div>
                    <div class="color-overlay"></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 mb-4">
                <div class="trend-item1">
                  <div class="trend-image position-relative rounded">
                    <img src="<?= $data[2]['gallery_images'][4]['image_url'] ?>" alt="image" />
                    <div
                      class="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index"
                    >
                      <div class="trend-content-title">
                        <h5 class="mb-0">
                          <!--<a href="tour-grid.html" class="theme1">Florida</a>-->
                        </h5>
                        <h3 class="mb-0 white"><?= $data[2]['dest_name'] ?></h3>
                      </div>
                      <span class="white bg-theme p-1 px-2 rounded"
                        ><?= $data[2]['total_packages'] ?> Tours</span
                      >
                    </div>
                    <div class="color-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 mb-4">
            <div class="trend-item1">
              <div class="trend-image position-relative rounded">
                <img src="<?= $data[4]['gallery_images'][4]['image_url'] ?>" alt="image" />
                <div
                  class="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index"
                >
                  <div class="trend-content-title">
                    <h5 class="mb-0">
                      <!--<a href="tour-grid.html" class="theme1">England</a>-->
                    </h5>
                    <h3 class="mb-0 white"><?= $data[3]['dest_name'] ?></h3>
                  </div>
                  <span class="white bg-theme p-1 px-2 rounded"><?= $data[3]['total_packages'] ?> Tours</span>
                </div>
                <div class="color-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>
