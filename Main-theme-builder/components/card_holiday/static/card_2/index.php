<?php 
include '../../../../generic.php';
$static_2 = getDataApi('package/popular');
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link rel="stylesheet" href="../../../common_assets/css/common-style.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/bootstrap.min.css" />
  </head>
  <body>
    <section class="cust-mg">
      <div class="container">
        <div class="row justify-content-center text-center mb-3">
          <div class="col-lg-6">
            <h2 class="section-title text-center">Top Destinations</h2>
            <p class="dest-sub">Top Selling</p>
          </div>
        </div>
        <div class="row">
            <?php  
            foreach($static_2 as $data)    
                {
            ?>
          <div class="col-md-4">
            <div class="card-sl">
              <div class="card-image">
                <img src="<?= $data['main_img_url'] ?>" loading="lazy" alt="Tour-images" />
              </div>
              <div class="card-heading"><?= $data['package_name'] ?></div>
              <!--<div class="card-text">
                Kerala is a region of great natural beauty. Eastern part of the
                state,climate is equable
              </div>-->
              <div class="card-text"><?= $data['currency']['default_currency'].$data['total_tour_cost'] ?></div>
              <a href="<?= BASE_URL_B2C.$data['file_name_url'] ?>" class="card-button">Book</a>
            </div>
          </div>
            <?php } ?>
        </div>
      </div>
    </section>
  </body>
</html>
