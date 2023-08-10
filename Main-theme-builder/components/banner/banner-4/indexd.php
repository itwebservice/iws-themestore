<?php 


$banner_4 = getDataApi('banner');

?>


 
    <link rel="stylesheet" href="<?= $urlCom ?>css/owl.css" />
    <link rel="stylesheet" href="<?= $urlCom ?>css/style.css" />
 
    <!-- Header Start -->
    <div class="container-fluid header bg-white p-0">
      <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div class="col-md-6 p-5 mt-lg-5">
          <h1 class="display-5 animated fadeIn mb-4">
            Find A <span class="text-primary">Perfect Tour</span> To Enjoy With
            Your Family
          </h1>
          <p class="animated fadeIn mb-4 pb-2">
            <b>Exclusive deals and discounts:</b> Offer exclusive deals and discounts
            to customers who book through the website.
          </p>
          <a href="" class="btn btn-primary py-3 px-5 me-3 animated fadeIn"
            >Get Started</a
          >
        </div>
        <div class="col-md-6 animated fadeIn">
          <div class="owl-carousel header-carousel">
              <?php  
            foreach($banner_4 as $data)    
                {
            ?>
            <div class="owl-carousel-item">
              <img class="img-fluid" src="<?= BASE_URL_MAIN.$data ?>" alt="Banner-image" />
            </div>
            <?php } ?>
          </div>
        </div>
      </div>
    </div>
    <!-- Header End -->

  

    <script src="<?= $urlCom ?>js/owl-carousel.js"></script>
    <script src="<?= $urlCom ?>js/custom.js"></script>
  </body>
</html>