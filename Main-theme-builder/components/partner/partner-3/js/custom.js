$(".partner_logo").owlCarousel({
  items: 5,
  loop: true,
  dots: false,
  nav: false,
  autoplay: true,
  margin: 15,
  responsive: {
    0: {
      items: 2,
    },
    800: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
