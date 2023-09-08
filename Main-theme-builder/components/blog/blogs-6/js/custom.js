$(".blog-slider-sec").owlCarousel({
  items: 3,
  loop: true,
  dots: false,
  nav: false,
  autoplay: true,
  margin: 15,
  responsive: {
    0: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
