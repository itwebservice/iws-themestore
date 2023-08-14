// Shorthand for $( document ).ready()
$(function () {
  $(".banner-slider-01").slick({
    autoplay: true,
    fade: true,
    autoplaySpeed: 4000,
    arrows: false,
    speed: 600,
  });

  $(".dropdown").hover(function () {
    $(".dropdown-toggle", this).trigger("click");
  });
});
