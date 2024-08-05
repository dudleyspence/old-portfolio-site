const swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 30, // Adjust space between slides
  loop: true,

  centerSlide: true,
  loopFillGroupWithBlank: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1, // Single slide view for small screens
    },
    620: {
      slidesPerView: 1, // Keep single slide view up to 620px
    },
    1024: {
      slidesPerView: 2, // Two slides view for larger screens
    },
    1400: {
      slidesPerView: 3,
    },
  },
});
