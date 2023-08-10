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
    <!-- Blog Two Section Start -->
    <section class="blog-two-section">
      <div class="container">
        <div class="blog-two-content">
          <div class="blog-two-title-content text-center">
            <h2 class="blog-two-title">Latest Blogs</h2>
            <p class="blog-two-discription">
              Get inspiration for your next trip
            </p>
          </div>

          <div class="blog-two-list">
              
                 <?php 
              foreach($blogs as $data)
              {
                  
              ?>
            <div class="blog-two-item">
              <div class="blog-two-img">
                <img src="<?= BASE_URL_MAIN.$data['img_filter'] ?>" alt="" class="img-fluid" />
              </div>
              <div class="blog-two-body bg-white">
                <div class="blog-two-comment">
                  <span>Posted By: Royal Hamblin</span>
                </div>
                <h5 class="blog-two-item-title"><?= $data['title'] ?> </h5>
                <p class="blog-two-item-discription">
                   <?= substr(strip_tags($data['description']),0,100) ?>
                </p>
                <a href="<?= BASE_URL_B2C."single-blog.php?blog_id=".$data['entry_id'] ?>" class="btn blog-two-btn"
                  >Read More <i class="fa-solid fa-angle-right"></i
                ></a>
              </div>
            </div>
            <?php } ?>
            
            <!--<div class="blog-two-item">-->
            <!--  <div class="blog-two-img">-->
            <!--    <img src="images/blog_6.jpg" alt="" class="img-fluid" />-->
            <!--    <div class="blog-two-calendar blog-two-blue">-->
            <!--      <span class="blog-two-date"-->
            <!--        ><b>27</b> <br />-->
            <!--        <small>JUL</small></span-->
            <!--      >-->
            <!--    </div>-->
            <!--  </div>-->
            <!--  <div class="blog-two-body bg-white">-->
            <!--    <div class="blog-two-comment">-->
            <!--      <span>Posted By: Rosita Chatmon</span>-->
            <!--    </div>-->
            <!--    <h5 class="blog-two-item-title">Great Adventure Trip</h5>-->
            <!--    <p class="blog-two-item-discription">-->
            <!--      On the other hand, we denounce with righteous indignation and-->
            <!--      dislike-->
            <!--    </p>-->
            <!--    <a href="#" class="btn blog-two-btn"-->
            <!--      >Read More <i class="fa-solid fa-angle-right"></i-->
            <!--    ></a>-->
            <!--  </div>-->
            <!--</div>-->
            <!--<div class="blog-two-item">-->
            <!--  <div class="blog-two-img">-->
            <!--    <img src="images/blog_5.jpg" alt="" class="img-fluid" />-->
            <!--    <div class="blog-two-calendar blog-two-primary">-->
            <!--      <span class="blog-two-date"-->
            <!--        ><b>27</b> <br />-->
            <!--        <small>JUL</small></span-->
            <!--      >-->
            <!--    </div>-->
            <!--  </div>-->
            <!--  <div class="blog-two-body bg-white">-->
            <!--    <div class="blog-two-comment">-->
            <!--      <span>Posted By: Loyd Nolf</span>-->
            <!--    </div>-->
            <!--    <h5 class="blog-two-item-title">Special Places</h5>-->
            <!--    <p class="blog-two-item-discription">-->
            <!--      On the other hand, we denounce with righteous indignation and-->
            <!--      dislike-->
            <!--    </p>-->
            <!--    <a href="#" class="btn blog-two-btn"-->
            <!--      >Read More <i class="fa-solid fa-angle-right"></i-->
            <!--    ></a>-->
            <!--  </div>-->
            <!--</div>-->
            <!--<div class="blog-two-item">-->
            <!--  <div class="blog-two-img">-->
            <!--    <img src="images/blog_7.jpg" alt="" class="img-fluid" />-->
            <!--    <div class="blog-two-calendar blog-two-yellow">-->
            <!--      <span class="blog-two-date"-->
            <!--        ><b>27</b> <br />-->
            <!--        <small>JUL</small></span-->
            <!--      >-->
            <!--    </div>-->
            <!--  </div>-->
            <!--  <div class="blog-two-body bg-white">-->
            <!--    <div class="blog-two-comment">-->
            <!--      <span>Posted By: Aracely Bashore</span>-->
            <!--    </div>-->
            <!--    <h5 class="blog-two-item-title">Adventures Trip</h5>-->
            <!--    <p class="blog-two-item-discription">-->
            <!--      On the other hand, we denounce with righteous indignation and-->
            <!--      dislike-->
            <!--    </p>-->
            <!--    <a href="#" class="btn blog-two-btn"-->
            <!--      >Read More <i class="fa-solid fa-angle-right"></i-->
            <!--    ></a>-->
            <!--  </div>-->
            <!--</div>-->
            <!--<div class="blog-two-item">-->
            <!--  <div class="blog-two-img">-->
            <!--    <img src="images/blog_3.jpg" alt="" class="img-fluid" />-->
            <!--    <div class="blog-two-calendar blog-two-green">-->
            <!--      <span class="blog-two-date"-->
            <!--        ><b>27</b> <br />-->
            <!--        <small>JUL</small></span-->
            <!--      >-->
            <!--    </div>-->
            <!--  </div>-->
            <!--  <div class="blog-two-body bg-white">-->
            <!--    <div class="blog-two-comment">-->
            <!--      <span>Posted By: Royal Hamblin</span>-->
            <!--    </div>-->
            <!--    <h5 class="blog-two-item-title">Its Best & Safe Tour</h5>-->
            <!--    <p class="blog-two-item-discription">-->
            <!--      On the other hand, we denounce with righteous indignation and-->
            <!--      dislike-->
            <!--    </p>-->
            <!--    <a href="#" class="btn blog-two-btn"-->
            <!--      >Read More <i class="fa-solid fa-angle-right"></i-->
            <!--    ></a>-->
            <!--  </div>-->
            <!--</div>-->
            <!--<div class="blog-two-item">-->
            <!--  <div class="blog-two-img">-->
            <!--    <img src="images/blog_4.jpg" alt="" class="img-fluid" />-->
            <!--    <div class="blog-two-calendar blog-two-red">-->
            <!--      <span class="blog-two-date"-->
            <!--        ><b>27</b> <br />-->
            <!--        <small>JUL</small></span-->
            <!--      >-->
            <!--    </div>-->
            <!--  </div>-->
            <!--  <div class="blog-two-body bg-white">-->
            <!--    <div class="blog-two-comment">-->
            <!--      <span>Posted By: Aracely Bashore</span>-->
            <!--    </div>-->
            <!--    <h5 class="blog-two-item-title">Most Memorable Experiences</h5>-->
            <!--    <p class="blog-two-item-discription">-->
            <!--      On the other hand, we denounce with righteous indignation and-->
            <!--      dislike-->
            <!--    </p>-->
            <!--    <a href="#" class="btn blog-two-btn"-->
            <!--      >Read More <i class="fa-solid fa-angle-right"></i-->
            <!--    ></a>-->
            <!--  </div>-->
            <!--</div>-->
          </div>
        </div>
      </div>
    </section>
    <!-- Blog Two Section End -->
  </body>
</html>
