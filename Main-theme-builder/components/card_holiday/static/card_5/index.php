<?php 
 include '../../../../generic.php';

$static_5 = getDataApi('package/popular');

?><!DOCTYPE html>
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
    <link
      rel="stylesheet"
      href="../../../common_assets/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="../../../common_assets/css/common-style.css" />
    <link rel="stylesheet" href="../../../common_assets/css/all.min.css" />
    <link rel="stylesheet" href="css/style.css" />

    <!-- Link js Files -->
    <script src="../../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../../common_assets/js/jquery-3.6.0.min.js"></script>
  </head>

  <body>
    <section class="package-section">
      <div class="container">
        <div class="section-heading text-center">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <h2>POPULAR PACKAGES</h2>
              <h5 class="dash-style">EXPLORE GREAT PLACES</h5>
              <p>
                Mollit voluptatem perspiciatis convallis elementum corporis quo
                veritatis aliquid blandit, blandit torquent, odit placeat.
                Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae
                placeat.
              </p>
            </div>
          </div>
        </div>
        <div class="package-inner">
          <div class="row">
              
                     <?php  
            foreach($static_5 as $data)    
                {
            ?>
            <div class="col-lg-4 col-md-6">
              <div class="package-wrap">
                <figure class="feature-image">
                  <a href="#">
                    <img src="<?= $data['main_img_url']  ?>" alt="" />
                  </a>
                </figure>
                <div class="package-price"> 
                  <h6><span> <?= $data['currency']['default_currency'].$data['total_tour_cost']  ?> </span> / per person</h6>
                </div>
                <div class="package-content-wrap">
                  <div class="package-meta text-center">
                    <ul>
                      <li>
                        <i class="far fa-clock"></i>
                        <?= $data['total_days'] ?>D/<?= $data['total_nights'] ?>N
                      </li>
                      <li>
                        <i class="fas fa-map-marker-alt"></i>
                         <?=$data['destination']['dest_name']  ?>
                      </li>
                    </ul>
                  </div>
                  <div class="package-content">
                    <h3>
                      <a href="<?= BASE_URL_B2C.$data['file_name_url'] ?>"> <?= $data['package_name'] ?></a>
                    </h3>

                    <p>
                     <?=$data['destination']['dest_name']  ?>
                    </p>
                    <div class="btn-wrap">
                      <a href="<?= BASE_URL_B2C.$data['file_name_url'] ?>" class="button-text width-6"
                        >Book Now<i class="fas fa-arrow-right"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <?php } ?>
            
        
          </div>
          <div class="btn-wrap text-center">
            <a href="#" class="button-primary">VIEW ALL PACKAGES</a>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>
