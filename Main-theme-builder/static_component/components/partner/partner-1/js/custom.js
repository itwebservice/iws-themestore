$(".partner-slider").owlCarousel({
  items: 6,
  loop: true,
  dots: false,
  nav: false,
  autoplay: true,
  margin: 15,
  responsive: {
    0: {
      items: 3,
    },
    800: {
      items: 4,
    },
    1000: {
      items: 6,
    },
  },
});
