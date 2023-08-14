// Shorthand for $( document ).ready()
$(function () {
  console.log("ready!");

  // --- Slick slider call
  $(".banner-slider-02").slick({
    autoplay: true,
    fade: true,
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
    autoplaySpeed: 6000,
    arrows: false,
  });

  $(".subMenus").hover(function () {
    $(".dropdown-toggle", this).trigger("click");
  });
});
