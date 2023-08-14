// Shorthand for $( document ).ready()
$(function () {
  // --- Slick slider call
  $(".banner-slider-02").slick({
    autoplay: true,
    fade: true,
    autoplaySpeed: 6000,
    arrows: false,
  });

  $(".js-customMenuBar").slimmenu({
    resizeWidth: "800",
    animSpeed: "medium",
    indentChildren: true,
    childrenIndenter: "&raquo;",
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".c-header").addClass("active");
    } else {
      $(".c-header").removeClass("active");
    }
  });
});
