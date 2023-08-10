<?php 
include '../../../generic.php';
$dest_card_5 = getDataApi('destination');
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
    <section class="home-destination">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 text-sm-center">
            <div class="section-heading">
              <h5 class="sub-title">UNCOVER PLACE</h5>
              <h2 class="section-title">POPULAR DESTINATION</h2>
              <p>
                Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
                nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
                tenetur, aptent.
              </p>
            </div>
          </div>
        </div>
        <div class="destination-section">
          <div class="row">
                      <?php  
            foreach($dest_card_5 as $data)    
                {
            ?>
            <div class="col-lg-4 col-md-6">
              <article
                class="destination-item"
                style="background-image: url(<?= $data['gallery_images'][4]['image_url'] ?>)"
              >
                <div class="destination-content">
                  <div class="rating-start-wrap">
                    <div class="rating-start">
                      <span style="width: 100%"></span>
                    </div>
                  </div>
                  <span class="cat-link">
                    <a href="#"> <?= $data['total_packages'] ?> Tours  </a>
                  </span>
                  <h3>
                    <a href="#"><?= $data['dest_name'] ?></a>
                  </h3>
                  <p>
                    <?= $data['gallery_images'][4]['description'] ?>
                  </p>
                </div>
              </article>
            </div>
            <?php } ?>
          </div>
          <div class="section-btn-wrap text-center">
            <a href="destination.html" class="round-btn">More Destination</a>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>
