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
    <section class="blog">
      <div class="container">
        <div class="banner-heading">
          <h2>Our Blog</h2>
          <div class="col-md-12">
            <div class="tour-blog-slider owl-carousel">
                      <?php 
              foreach($blogs as $data)
              {  
              ?>
              <div class="content-div text-center">
                <div class="blog-inner">
                  <div class="blog-img">
                    <img class="img-responsive" src="<?= BASE_URL_MAIN.$data['img_filter'] ?>" alt="" />
                    <div class="img-border"></div>
                  </div>
                  <div class="blog-text">
                    <p class="blog-heading"><?= $data['title'] ?> </p>
                    <p class="blog-textual-cont">
                     <?= substr(strip_tags($data['description']),0,100) ?>
                    </p>
                    <a class="read-more" href="<?= BASE_URL_B2C."single-blog.php?blog_id=".$data['entry_id'] ?>">Read More</a>
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
