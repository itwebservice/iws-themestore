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
    <section id="blog" class="bg-light-gray">
      <h2 class="d-none">heading</h2>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="main-title">
              <h2>Website Blogging</h2>
              <h5>Read our blogs</h5>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-sm-12 mb-xs-5">
            <div class="blog-slider owl-carousel">
                <?php 
              foreach($blogs as $data)
              {
                  
              ?>
              <div class="news_item shadow blog-one">
                <div class="image split-blog-scale">
                  <img
                    src="<?= BASE_URL_MAIN.$data['img_filter'] ?>"
                    loading="lazy"
                    alt="Latest News"
                    class="img-fluid"
                  />
                </div>
                <div class="news_desc">
                  <h3 class="text-capitalize line-height-normal">
                    <a href="" class="color-black"><?= $data['title'] ?> </a>
                  </h3>
                  <p class="mb-35px">
                    <?= substr(strip_tags($data['description']),0,100) ?>
                  </p>
                  <a
                    href="<?= BASE_URL_B2C."single-blog.php?blog_id=".$data['entry_id'] ?>"
                    class="btn-setting btn-hvr-setting-main btn-black text-white btn-hvr"
                    >Read more
                    <span class="btn-hvr-setting btn-hvr-summer-sky">
                      <span class="btn-hvr-setting-inner">
                        <span class="btn-hvr-effect"></span>
                        <span class="btn-hvr-effect"></span>
                        <span class="btn-hvr-effect"></span>
                        <span class="btn-hvr-effect"></span>
                      </span>
                    </span>
                  </a>
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
