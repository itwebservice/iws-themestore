 <?php 
 include '../../../generic.php';

$blogs = getDataApi('blogs');

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
    <link rel="stylesheet" href="css/owl.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <section id="blog" class="blog_section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title text-center">
              <h2>Our Latest Blogs For Travellers</h2>
              <span>Latest Blog Posts</span>
            </div>
          </div>
          <!-- END COL -->
        </div>
        <!-- END ROW -->

        <div class="row">
          <div class="blog-slider-sec owl-carousel">
              <?php 
              foreach($blogs as $data)
              {
                  
              ?>
            <div class="single_blog">
              <div class="blog_image">
                <img
                  class="blog-photo"
                  loading="lazy"
                  alt="Blog Photo"
                  src="<?= BASE_URL_MAIN.$data['img_filter'] ?>"
                />
              </div>

              <div class="blog-text">
                <div class="post-meta">
                </div>

                <h4>
                  <a href="#"><?= $data['title'] ?> </a>
                </h4>
                <p>
                   <?= substr(strip_tags($data['description']),0,100) ?>
                </p>
                <a href="<?= BASE_URL_B2C."single-blog.php?blog_id=".$data['entry_id'] ?>" class="post-btn"
                  >View Details <i class="icofont-long-arrow-right"></i
                ></a>
              </div>
            </div>
<?php } ?>
          </div>
        </div>
        <!--- END ROW -->
      </div>
      <!--- END CONTAINER -->
    </section>

    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
    <script src="js/owl-carousel.js"></script>
    <script src="js/custom.js"></script>
  </body>
</html>
