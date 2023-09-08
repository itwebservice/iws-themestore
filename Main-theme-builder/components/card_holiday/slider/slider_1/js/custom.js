$(".owl-3-slider").owlCarousel({
  loop: true,
  autoHeight: true,
  margin: 10,
  autoplay: true,
  smartSpeed: 700,
  items: 1,
  nav: true,
  dots: true,
  navText: [
    '<span class="icon-keyboard_backspace"></span>',
    '<span class="icon-keyboard_backspace"></span>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1000: {
      items: 2,
    },
    1100: {
      items: 3,
    },
  },
});
