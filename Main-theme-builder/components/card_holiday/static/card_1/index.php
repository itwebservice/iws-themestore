<?php 
include '../../../../generic.php';
$static_1 = getDataApi('package/popular');
?>
<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link rel="stylesheet" href="css/style.css" />
    <link
      rel="stylesheet"
      href="../../../common_assets/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="../../../common_assets/css/all.min.css" />
  </head>
  <body>
    <div class="untree_co-section">
      <div class="container">
        <div class="row justify-content-center text-center mb-5">
          <div class="col-lg-6">
            <h2 class="section-title text-center mb-3">Popular Destinations</h2>
            <p class="dest-sub">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div class="row">
            <?php  
            foreach($static_1 as $data)    
                {
            ?>
          <div class="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div class="media-1">
              <a href="<?= BASE_URL_B2C.$data['file_name_url'] ?>" class="d-block mb-3"
                ><img
                  src="<?= $data['main_img_url']  ?>"
                  alt="Tour Dest Image"
                  class="img-fluid"
              /></a>
              <span class="d-flex align-items-center loc mb-2">
                <span class="fa fa-location-dot icon-room mr-3"></span>
                <span><?=$data['destination']['dest_name']  ?></span>
              </span>
              <div class="d-flex align-items-center">
                <div>
                  <h3><a href="#"><?= $data['package_name'] ?></a></h3>
                  <div class="price ml-auto">
                    <span><?= $data['currency']['default_currency'].$data['total_tour_cost'] ?></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <?php } ?>
        </div>
      </div>
    </div>
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
