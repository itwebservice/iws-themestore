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
    <link rel="stylesheet" href="css/slick-theme.css" />
    <link rel="stylesheet" href="css/slick.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>

  <body>
    <section
      class="single-items center-block item-seven parallax testimonial-sec"
      id="reviews"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-5 text-center review-box">
            <div class="row no-gutters slick-test">
                       <?php  
            foreach($testi_2 as $data)    
                {
            ?>
              <div class="reviews item">
                <div class="review-body">
                  <p class="user-comment">
                     <?= $data['testm'] ?>
                  </p>
                  <p class="comment-date">19-dec-2020</p>
                  <ul class="review-stars">
                    <li>
                      <a href="#"><i class="las la-star"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="las la-star"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="las la-star"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="las la-star"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="las la-star"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="user-img">
                  <img
                    src="<?= BASE_URL_MAIN.$data['filter_img'] ?>" width=100
                    class="rounded-circle"
                    alt="img"
                  />
                </div>
                <h4 class="user-name"><?= $data['name'] ?></h4>
                <p class="user-designation">- <?= $data['designation'] ?> -</p>
              </div>
              
              <?php } ?>
              <!--<div class="reviews item">-->
              <!--  <div class="review-body">-->
              <!--    <p class="user-comment">-->
              <!--      Edit button to change this text. Lorem dolor sit amet, sit-->
              <!--      consectetur elit. amet, for adipiscing elit. amet, consect-->
              <!--      adipiscing elit.-->
              <!--    </p>-->
              <!--    <p class="comment-date">19-dec-2020</p>-->
              <!--    <ul class="review-stars">-->
              <!--      <li>-->
              <!--        <a href="#"><i class="las la-star"></i></a>-->
              <!--      </li>-->
              <!--      <li>-->
              <!--        <a href="#"><i class="las la-star"></i></a>-->
              <!--      </li>-->
              <!--      <li>-->
              <!--        <a href="#"><i class="las la-star"></i></a>-->
              <!--      </li>-->
              <!--      <li>-->
              <!--        <a href="#"><i class="las la-star"></i></a>-->
              <!--      </li>-->
              <!--      <li>-->
              <!--        <a href="#"><i class="las la-star"></i></a>-->
              <!--      </li>-->
              <!--    </ul>-->
              <!--  </div>-->
              <!--  <div class="user-img">-->
              <!--    <img src="images/rev.jpg" class="rounded-circle" alt="img" />-->
              <!--  </div>-->
              <!--  <h4 class="user-name">Mickal Devid</h4>-->
              <!--  <p class="user-designation">- Web Designer -</p>-->
              <!--</div>-->
              <!--<div class="reviews item">-->
              <!--  <div class="review-body">-->
              <!--    <p class="user-comment">-->
              <!--      Edit with button to change this text. Lorem dolor sit amet,-->
              <!--      sit consectetur elit. amet, for adipiscing elit. amet,-->
              <!--      consect adipiscing elit.-->
              <!--    </p>-->
              <!--    <p class="comment-date">19-dec-2020</p>-->
              <!--    <ul class="review-stars">-->
              <!--      <li>-->
              <!--        <a href="#"><i class="las la-star"></i></a>-->
              <!--      </li>-->
              <!--      <li>-->
              <!--        <a href="#"><i class="las la-star"></i></a>-->
              <!--      </li>-->
              <!--      <li>-->
              <!--        <a href="#"><i class="las la-star"></i></a>-->
              <!--      </li>-->
              <!--      <li>-->
              <!--        <a href="#"><i class="las la-star"></i></a>-->
              <!--      </li>-->
              <!--      <li>-->
              <!--        <a href="#"><i class="las la-star"></i></a>-->
              <!--      </li>-->
              <!--    </ul>-->
              <!--  </div>-->
              <!--  <div class="user-img">-->
              <!--    <img src="images/rev1.jpg" class="rounded-circle" alt="img" />-->
              <!--  </div>-->
              <!--  <h4 class="user-name">Mickal Devid</h4>-->
              <!--  <p class="user-designation">- Web Designer -</p>-->
              <!--</div>-->
            </div>
            <a class="navigate-btn prev-review-btn"
              ><span class="fly-line"></span>Prev
              <i class="fa fa-arrow-right"></i>
            </a>
            <a class="navigate-btn next-review-btn"
              ><span class="fly-line"></span>Next
              <i class="fa fa-arrow-right"></i
            ></a>
          </div>
        </div>
      </div>
    </section>

    <!-- Link js Files -->
    <script src="../../common_assets/js/bootstrap.bundle.min.js"></script>
    <script src="../../common_assets/js/jquery-3.6.0.min.js"></script>
    <script src="js/slick.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/custom.js"></script>
  </body>
</html>
