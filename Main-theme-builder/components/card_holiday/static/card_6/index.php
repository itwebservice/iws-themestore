<?php 
 include '../../../../generic.php';

$static_6 = getDataApi('package/popular');

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
            </div>
          </div>
        </div>
        <div class="package-inner">
          <div class="row">
              
                         <?php  
            foreach($static_6 as $data)    
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
                  <h6>Featured</h6>
                </div>
                <div class="package-content-wrap">
                  <div
                    class="elementor-shape elementor-shape-bottom"
                    data-negative="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1000 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        class="elementor-shape-fill"
                        d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
                    c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
                    c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
                      ></path>
                    </svg>
                  </div>
                  <div class="package-content">
                    <h3>
                      <a href="#"><?= $data['package_name'] ?></a>
                    </h3>

                    <p>
                     <?=$data['destination']['dest_name']  ?>
                    </p>
                    <div class="btn-wrap">
                      <a href="#" class="button-text width-6"
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
