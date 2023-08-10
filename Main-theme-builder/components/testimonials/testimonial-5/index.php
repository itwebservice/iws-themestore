<?php 
 include '../../../generic.php';

$testi_2 = getDataApi('testimonial');

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
    <link rel="stylesheet" href="css/owl.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>

  <body>
    <section class="event testimonial bg bg-img bg-about">
      <div class="container">
        <div class="row">
          <div class="offset-md-1 col-md-10">
            <div class="title title3">
              <div class="main-title">
                <h2 class="text-white">Testimonial</h2>
              </div>
              <div class="sub-title">
                <p class="text-white">
                  Register now and reserve your seat for this<span
                    >year's Unice,</span
                  >
                  the largest <span>web development</span> and online
                  marketing<span>conference in UK,</span> covering everything
                  you need to know in order to develop a successful online
                  business.
                </p>
              </div>
            </div>
          </div>
          <div class="offset-md-1 col-md-10">
            <div class="testimonial-slider owl-carousel">
                
                     
               <?php  
            foreach($testi_2 as $data)    
                {
            ?>
              <div class="offset-xl-1 col-12 col-xl-10">
                <div class="row">
                  <div class="col-sm-3">
                    <div class="testimonial-msg set-relative">
                      <img alt="" class="img-fluid" src="<?= BASE_URL_MAIN.$data['filter_img']; ?>" />
                    </div>
                  </div>
                  <div class="px-lg-4 col-sm-9">
                    <div class="quotes set-relative m-b-30">
                      <div class="quote-text">
                        <h5>
                          <?= $data['testm'] ?>
                        </h5>
                      </div>
                    </div>
                    <div class="rating align-items-center">
                      <div class="stars">
                        <ul>
                          <li>
                            <i class="fa fa-star yellow"></i
                            ><i class="fa fa-star yellow"></i
                            ><i class="fa fa-star yellow"></i
                            ><i class="fa fa-star yellow"></i
                            ><i class="fa fa-star"></i>
                          </li>
                        </ul>
                      </div>
                      <h5 class="name">
                        <?= $data['name'] ?><!-- -->- <span> <!-- --><?= $data['designation'] ?></span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <?php } ?>

             
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
    <script src="js/owl-carousel.js"></script>
    <script src="js/custom.js"></script>
  </body>
</html>
