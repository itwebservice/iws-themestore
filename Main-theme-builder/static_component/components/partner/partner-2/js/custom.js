$(".partner_slider_2").owlCarousel({
  items: 4,
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
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
