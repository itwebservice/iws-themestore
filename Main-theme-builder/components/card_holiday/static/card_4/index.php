<?php 
 include '../../../../generic.php';

$static_4 = getDataApi('package/popular');

?>
<!DOCTYPE html>
<html lang="en">
  <head>
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
    <link rel="stylesheet" href="css/all.min.css" />
    <link rel="stylesheet" href="../../../common_assets/css/common-style.css" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css"
    />
    <link rel="stylesheet" href="css/style.css" />
    <!-- Link js Files -->
    <script src="js/bootstrap.bundle.min.js"></script>
  </head>

  <body>
    <section class="cust-mg">
      <div class="container">
        <div class="main-title text-center">
          <h2 class="section-title">Top Tour Destination</h2>
          <p class="dest-sub">
            Find Your Special Tour Today With Our Best Packages
          </p>
        </div>
        <div class="row">
                   <?php  
            foreach($static_4 as $data)    
                {
            ?>
          <div class="col col-12 col-md-6 col-lg-4 col-xl-4">
            <div class="card widget-card border-0">
              <div class="widget-card-img">
                <img src="<?= $data['main_img_url']  ?>" class="card-img-top" alt="..." />
                <div class="widget-card-price">
                  <h4>
                   <?= $data['currency']['default_currency'].$data['total_tour_cost']  ?>
                    <small class="tour-card-discription">/ Person</small>
                  </h4>
                </div>
                <div class="widget-card-power">
                  <span> NEW </span>
                </div>
              </div>
              <div class="card-body widget-card-body">
                <div class="widget-card-reviw widget-card-hotel-title mb-0">
                  <div
                    class="widget-card-ruting widget-card-ruting-australia mb-0"
                  >
                    <a
                      href="#"
                      class="text-decoration-none lilly-card-location"
                    >
                      <span
                        class="widget-card-ruting-location card-ruting-hotel border-0"
                      >
                        <i class="bi bi-geo-alt"></i> <?=$data['destination']['dest_name']  ?>
                      </span>
                    </a>
                  </div>
                  <a href="<?= BASE_URL_B2C.$data['file_name_url'] ?>" class="text-decoration-none">
                    <h5
                      class="card-title widget-card-title mb-2 hotel-card-title"
                    >
                      <?= $data['package_name'] ?>
                    </h5>
                  </a>
                  <p class="tour-card-discription mt-1 mb-1">
                    <b><?= $data['total_days'] ?> Days,</b>
                    <b><?= $data['total_nights'] ?> Nights</b> Travel Trip
                  </p>
                </div>
                <p class="card-text widget-card-text mb-1">
                  From world-class wine to glistening beaches – Many more
                  reasons to visit Australia.
                </p>
              </div>
              <div class="card-footer widget-card-footer">
                <div class="canada-profile">
                  <a
                    href="<?= BASE_URL_B2C.$data['file_name_url'] ?>"
                    class="btn lilly-profile-btn tour-card-discription"
                    >Book Now</a
                  >
                </div>
              </div>
            </div>
          </div>
                    <?php } ?>
         

       
        </div>
      </div>
    </section>
  </body>
</html>
