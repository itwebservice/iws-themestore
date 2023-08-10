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
    <link rel="stylesheet" href="../../common_assets/css/common-style.css" />
    <link rel="stylesheet" href="css/style.css" />

    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
    <script src="../../common_assets/js/slick.min.js"></script>
    <script src="js/custom.js"></script>
  </head>

  <body>
    <!-- Blog One Section Start -->
    <section class="blog-one-section">
      <div class="container">
        <div class="blog-one-content">
          <div class="blog-one-title-content text-center">
            <h2 class="blog-one-title">Latest Blogs</h2>
            <p class="blog-one-discription">
              Get inspiration for your next trip
            </p>
          </div>
          <div class="blog-one-list">
              <?php 
              foreach($blogs as $data)
              {
                  
              ?>
            <div class="blog-one-item">
              <div class="blog-one-img">
                <img src="<?= BASE_URL_MAIN.$data['img_filter'] ?>" alt="" class="img-fluid" />
              </div>
              <div class="blog-one-body bg-white">
                <div class="blog-one-comment">
                 
                </div>
                <h5 class="blog-one-item-title">
                  <?= $data['title'] ?> 
                </h5>
                <p class="blog-one-item-discription">
                 <?= substr(strip_tags($data['description']),0,100) ?>
                </p>
                <a href="<?= BASE_URL_B2C."single-blog.php?blog_id=".$data['entry_id'] ?>" class="btn blog-one-btn"
                  >Read More <i class="fa-solid fa-angle-right"></i
                ></a>
              </div>
            </div>
            <?php } ?>
            
            <!--<div class="blog-one-item">-->
            <!--  <div class="blog-one-img">-->
            <!--    <img src="images/blog_6.jpg" alt="" class="img-fluid" />-->
            <!--    <div class="blog-one-calendar blog-one-blue">-->
            <!--      <span class="blog-one-date"-->
            <!--        ><b>27</b> <br />-->
            <!--        <small>JUL</small></span-->
            <!--      >-->
            <!--    </div>-->
            <!--  </div>-->
            <!--  <div class="blog-one-body bg-white">-->
            <!--    <div class="blog-one-comment">-->
            <!--      <a href="" class="border-end text-decoration-none pe-3 me-2">-->
            <!--        John Smith</a-->
            <!--      >-->
            <!--    </div>-->
            <!--    <h5 class="blog-one-item-title">-->
            <!--      Best Tour Places and It's a Great Adventure Trip-->
            <!--    </h5>-->
            <!--    <p class="blog-one-item-discription">-->
            <!--      On the other hand, we denounce with righteous indignation and-->
            <!--      dislike-->
            <!--    </p>-->
            <!--    <a href="" class="btn blog-one-btn"-->
            <!--      >Read More <i class="fa-solid fa-angle-right"></i-->
            <!--    ></a>-->
            <!--  </div>-->
            <!--</div>-->
            <!--<div class="blog-one-item">-->
            <!--  <div class="blog-one-img">-->
            <!--    <img src="images/blog_1.jpg" alt="" class="img-fluid" />-->
            <!--    <div class="blog-one-calendar">-->
            <!--      <span class="blog-one-date"-->
            <!--        ><b>27</b> <br />-->
            <!--        <small>JUL</small></span-->
            <!--      >-->
            <!--    </div>-->
            <!--  </div>-->
            <!--  <div class="blog-one-body bg-white">-->
            <!--    <div class="blog-one-comment">-->
            <!--      <a href="" class="border-end text-decoration-none pe-3 me-2"-->
            <!--        >Lilly Wisely</a-->
            <!--      >-->
            <!--    </div>-->
            <!--    <h5 class="blog-one-item-title">-->
            <!--      We had lot of Enjoyment in Tour. Its A Great Trip-->
            <!--    </h5>-->
            <!--    <p class="blog-one-item-discription">-->
            <!--      On the other hand, we denounce with righteous indignation and-->
            <!--      dislike-->
            <!--    </p>-->
            <!--    <a href="" class="btn blog-one-btn"-->
            <!--      >Read More <i class="fa-solid fa-angle-right"></i-->
            <!--    ></a>-->
            <!--  </div>-->
            <!--</div>-->
            <!--<div class="blog-one-item">-->
            <!--  <div class="blog-one-img">-->
            <!--    <img src="images/blog_2.jpg" alt="" class="img-fluid" />-->
            <!--    <div class="blog-one-calendar blog-one-blue">-->
            <!--      <span class="blog-one-date"-->
            <!--        ><b>27</b> <br />-->
            <!--        <small>JUL</small></span-->
            <!--      >-->
            <!--    </div>-->
            <!--  </div>-->
            <!--  <div class="blog-one-body bg-white">-->
            <!--    <div class="blog-one-comment">-->
            <!--      <a href="" class="border-end text-decoration-none pe-3 me-2"-->
            <!--        >By John Smith</a-->
            <!--      >-->
            <!--    </div>-->
            <!--    <h5 class="blog-one-item-title">-->
            <!--      Best Tour Places and It's a Great Adventure Trip-->
            <!--    </h5>-->
            <!--    <p class="blog-one-item-discription">-->
            <!--      On the other hand, we denounce with righteous indignation and-->
            <!--      dislike-->
            <!--    </p>-->
            <!--    <a href="" class="btn blog-one-btn"-->
            <!--      >Read More <i class="fa-solid fa-angle-right"></i-->
            <!--    ></a>-->
            <!--  </div>-->
            <!--</div>-->
            <!--<div class="blog-one-item">-->
            <!--  <div class="blog-one-img">-->
            <!--    <img src="images/blog_3.jpg" alt="" class="img-fluid" />-->
            <!--    <div class="blog-one-calendar">-->
            <!--      <span class="blog-one-date"-->
            <!--        ><b>27</b> <br />-->
            <!--        <small>JUL</small></span-->
            <!--      >-->
            <!--    </div>-->
            <!--  </div>-->
            <!--  <div class="blog-one-body bg-white">-->
            <!--    <div class="blog-one-comment">-->
            <!--      <a href="" class="border-end text-decoration-none pe-3 me-2"-->
            <!--        >By Lilly Wisely</a-->
            <!--      >-->
            <!--    </div>-->
            <!--    <h5 class="blog-one-item-title">-->
            <!--      We had lot of Enjoyment in Tour. Its A Great Trip-->
            <!--    </h5>-->
            <!--    <p class="blog-one-item-discription">-->
            <!--      On the other hand, we denounce with righteous indignation and-->
            <!--      dislike-->
            <!--    </p>-->
            <!--    <a href="" class="btn blog-one-btn"-->
            <!--      >Read More <i class="fa-solid fa-angle-right"></i-->
            <!--    ></a>-->
            <!--  </div>-->
            <!--</div>-->
            <!--<div class="blog-one-item">-->
            <!--  <div class="blog-one-img">-->
            <!--    <img src="images/blog_4.jpg" alt="" class="img-fluid" />-->
            <!--    <div class="blog-one-calendar blog-one-blue">-->
            <!--      <span class="blog-one-date"-->
            <!--        ><b>27</b> <br />-->
            <!--        <small>JUL</small></span-->
            <!--      >-->
            <!--    </div>-->
            <!--  </div>-->
            <!--  <div class="blog-one-body bg-white">-->
            <!--    <div class="blog-one-comment">-->
            <!--      <a href="" class="border-end text-decoration-none pe-3 me-2"-->
            <!--        >By John Smith</a-->
            <!--      >-->
            <!--    </div>-->
            <!--    <h5 class="blog-one-item-title">-->
            <!--      Best Tour Places and It's a Great Adventure Trip-->
            <!--    </h5>-->
            <!--    <p class="blog-one-item-discription">-->
            <!--      On the other hand, we denounce with righteous indignation and-->
            <!--      dislike-->
            <!--    </p>-->
            <!--    <a href="" class="btn blog-one-btn"-->
            <!--      >Read More <i class="fa-solid fa-angle-right"></i-->
            <!--    ></a>-->
            <!--  </div>-->
            <!--</div>-->
          </div>
        </div>
      </div>
    </section>
    <!-- Blog One Section End -->
  </body>
</html>
