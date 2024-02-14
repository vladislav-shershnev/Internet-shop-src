export default indexSlick;

if ($('.owl-carousel').length) {
  $('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  items: 1,
  responsive: {
  0: {
  items: 1
  },
  768: {
  items: 1
  }
  }
  });
  }