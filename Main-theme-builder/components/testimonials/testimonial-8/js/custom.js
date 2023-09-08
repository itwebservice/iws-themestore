$(".slick-test").slick({
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
});
$(".next-review-btn").click(function () {
  $(".slick-test").slick("slickNext");
});
$(".prev-review-btn").click(function () {
  $(".slick-test").slick("slickPrev");
});
