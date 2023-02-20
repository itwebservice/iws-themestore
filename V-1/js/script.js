// Shorthand for $( document ).ready()
$(function () {
  console.log("ready!");

  $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    animateOut: "fadeOut",
    dots: false,
  });

  $(".dropdown").hover(function () {
    $(".dropdown-toggle", this).trigger("click");
  });
});
