const swiper = new Swiper(".projects-container", {
  slidesPerView: 1,
  spaceBetween: 20, // Adjust space between slides
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
  },
});
