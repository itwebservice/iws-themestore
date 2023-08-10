<?php 
 include '../../../generic.php';

$testi_1 = getDataApi('testimonial');

?>
<html>
  <head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="../../common_assets/css/bootstrap.min.css" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
    />
    <link rel="stylesheet" href="" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css"
    />
  </head>
  <body>
    <section class="cust-mg">
    <div class="row justify-content-center text-center">
      <div class="col-lg-6">
        <h2 class="section-title text-center">Testimonials</h2>
        <p class="dest-sub">
          Tourist Feedback
        </p>
      </div>
    </div>

    </div>
    <div class="owl-carousel testi owl-theme mt-5">
        <?php  
            foreach($testi_1 as $data)    
                {
            ?>
      <div class="owl-item">
        <div class="card">
          <div class="img-card">
            <img
              src="<?= BASE_URL_MAIN.$data['filter_img'] ?>"
              alt=""
            />
          </div>
          <div class="testimonial mt-4 mb-2">
            <?= substr($data['testm'],0,100) ?>...
          </div>
          <div class="name"><?= $data['name'] ?></div>
        </div>
      </div>
      <?php } ?>
    </div>
    </section>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="js/owl-carousel.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.js"></script>
    <script>
      $(document).ready(function () {
        var silder = $(".owl-carousel");
        silder.owlCarousel({
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: false,
          items: 1,
          stagePadding: 20,
          center: true,
          nav: false,
          margin: 50,
          dots: true,
          loop: true,
          responsive: {
            0: { items: 1 },
            480: { items: 2 },
            575: { items: 2 },
            768: { items: 2 },
            991: { items: 3 },
            1200: { items: 4 },
          },
        });
      });
    </script>
  </body>
</html>
