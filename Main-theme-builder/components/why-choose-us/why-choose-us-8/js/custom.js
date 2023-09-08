$("#package-slider").owlCarousel({
  items: 3,
  pagination: false,
  navigation: true,
  slideSpeed: 1000,
  autoPlay: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});
