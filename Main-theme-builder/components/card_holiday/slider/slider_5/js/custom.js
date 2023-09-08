$(document).ready(function () {
  $(".slider-detail").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    active: true,
    // fade: true,
    asNavFor: ".slider-img",
  });
  $(".slider-img").slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider-detail",
    dots: false,
    arrows: false,
    focusOnSelect: true,
  });
  $(".slider-arr-up").click(function () {
    $(".slider-img").slick("slickNext");
  });
  $(".slider-arr-down").click(function () {
    $(".slider-img").slick("slickPrev");
  });
});
