$("#testimonial-slider").owlCarousel({
  items: 2,
  autoplay: 1500,
  smartSpeed: 1500,
  autoplayHoverPause: true,
  slideBy: 1,
  loop: true,
  margin: 0,
  dots: true,
  nav: false,
  responsive: {
    1200: {
      items: 2,
    },
    768: {
      items: 2,
    },
    480: {
      items: 1,
      autoplay: false,
    },
    320: {
      items: 1,
      autoplay: false,
    },
  },
});
