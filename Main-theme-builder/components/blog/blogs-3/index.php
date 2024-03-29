
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
    <link rel="stylesheet" href="../../common_assets/css/all.min.css" />
    <link rel="stylesheet" href="../../common_assets/css/slick.css" />
    <link rel="stylesheet" href="css/style.css" />

    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
    <script src="../../common_assets/js/slick.min.js"></script>
    <script src="js/custom.js"></script>
  </head>

  <body>
    <!-- Start blog Area -->
    <section class="recent-blog-area section-gap">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="menu-content pb-60 col-lg-9">
            <div class="text-center">
              <h1 class="blog-title">Latest from Our Blog</h1>
              <p>
                With the exception of Nietzsche, no other madman has contributed
                so much to human sanity as has.
              </p>
            </div>
          </div>
        </div>

        <div class="active-recent-blog-carusel">
             <?php 
              foreach($blogs as $data)
              {
                  
              ?>
          <div class="single-recent-blog-post item">
            <div class="thumb">
              <img class="img-fluid" src="<?= BASE_URL_MAIN.$data['img_filter'] ?>" alt="" />
            </div>
            <div class="details">
              <a href="<?= BASE_URL_B2C."single-blog.php?blog_id=".$data['entry_id'] ?>"><h4 class="title"> <?= $data['title'] ?> </h4></a>
              <p>
                <?= substr(strip_tags($data['description']),0,100) ?>
              </p>
            </div>
          </div>
          
          <?php } ?>
          <!--<div class="single-recent-blog-post item">-->
          <!--  <div class="thumb">-->
          <!--    <img class="img-fluid" src="images/b2.jpg" alt="" />-->
          <!--  </div>-->
          <!--  <div class="details">-->
          <!--    <a href="#"><h4 class="title">Himachal Pradesh Wonder</h4></a>-->
          <!--    <p>-->
          <!--      Acres of Diamonds… you’ve read the famous story, or at least had-->
          <!--      it related to you. A farmer.-->
          <!--    </p>-->
          <!--    <h6 class="date">31st January,2018</h6>-->
          <!--  </div>-->
          <!--</div>-->
          <!--<div class="single-recent-blog-post item">-->
          <!--  <div class="thumb">-->
          <!--    <img class="img-fluid" src="images/b3.jpg" alt="" />-->
          <!--  </div>-->
          <!--  <div class="details">-->
          <!--    <a href="#"><h4 class="title">Forest Safari</h4></a>-->
          <!--    <p>-->
          <!--      Acres of Diamonds… you’ve read the famous story, or at least had-->
          <!--      it related to you. A farmer.-->
          <!--    </p>-->
          <!--    <h6 class="date">31st January,2018</h6>-->
          <!--  </div>-->
          <!--</div>-->
          <!--<div class="single-recent-blog-post item">-->
          <!--  <div class="thumb">-->
          <!--    <img class="img-fluid" src="images/b1.jpg" alt="" />-->
          <!--  </div>-->
          <!--  <div class="details">-->
          <!--    <a href="#"><h4 class="title">Low Cost Advertising</h4></a>-->
          <!--    <p>-->
          <!--      Acres of Diamonds… you’ve read the famous story, or at least had-->
          <!--      it related to you. A farmer.-->
          <!--    </p>-->
          <!--    <h6 class="date">31st January,2018</h6>-->
          <!--  </div>-->
          <!--</div>-->
          <!--<div class="single-recent-blog-post item">-->
          <!--  <div class="thumb">-->
          <!--    <img class="img-fluid" src="images/b2.jpg" alt="" />-->
          <!--  </div>-->
          <!--  <div class="details">-->
          <!--    <a href="#"><h4 class="title">Char Dham Yatra</h4></a>-->
          <!--    <p>-->
          <!--      Acres of Diamonds… you’ve read the famous story, or at least had-->
          <!--      it related to you. A farmer.-->
          <!--    </p>-->
          <!--    <h6 class="date">31st January,2018</h6>-->
          <!--  </div>-->
          <!--</div>-->
          <!--<div class="single-recent-blog-post item">-->
          <!--  <div class="thumb">-->
          <!--    <img class="img-fluid" src="images/b3.jpg" alt="" />-->
          <!--  </div>-->
          <!--  <div class="details">-->
          <!--    <a href="#"><h4 class="title">Dubai</h4></a>-->
          <!--    <p>-->
          <!--      Acres of Diamonds… you’ve read the famous story, or at least had-->
          <!--      it related to you. A farmer.-->
          <!--    </p>-->
          <!--    <h6 class="date">31st January,2018</h6>-->
          <!--  </div>-->
          <!--</div>-->
        </div>
      </div>
    </section>
    <!-- End recent-blog Area -->
  </body>
</html>
