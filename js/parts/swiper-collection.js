if (document.querySelector('.mySwiper')) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 32,
    // loop: true,
    freeMode: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".mySwiper .swiper-button-next",
      prevEl: ".mySwiper .swiper-button-prev",
    },
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
    breakpoints: {
      0: { // при 0px и выше
        // direction: 'horizontal',
        spaceBetween: 16,
        slidesPerView: 2,
      },
      600: { // при 0px и выше
        // direction: 'horizontal',
        slidesPerView: 3,
      },
      1024: { // при 0px и выше
        // direction: 'horizontal',
        slidesPerView: 4,
      },
      1370: { // при 0px и выше
        // direction: 'horizontal',
        slidesPerView: 5,
      },
      1610: { // при 768px и выше
        // direction: 'vertical',
        slidesPerView: 6,
      }
    },
  });
};

if (document.querySelector('.mySwiper-2')) {

  var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 6,
    spaceBetween: 32,
    // loop: true,
    freeMode: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".mySwiper-2 .swiper-button-next",
      prevEl: ".mySwiper-2 .swiper-button-prev",
    },
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
    breakpoints: {
      0: { // при 0px и выше
        // direction: 'horizontal',
        spaceBetween: 16,
        slidesPerView: 2,
      },
      600: { // при 0px и выше
        // direction: 'horizontal',
        slidesPerView: 3,
      },
      1024: { // при 0px и выше
        // direction: 'horizontal',
        slidesPerView: 4,
      },
      1370: { // при 0px и выше
        // direction: 'horizontal',
        slidesPerView: 5,
      },
      1610: { // при 768px и выше
        // direction: 'vertical',
        slidesPerView: 6,
      }
    },
  });

};

if (document.querySelector('.mySwiper-3')) {

  var swiper3 = new Swiper(".mySwiper-3", {
    slidesPerView: 6,
    spaceBetween: 32,
    // loop: true,
    freeMode: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".mySwiper-3 .swiper-button-next",
      prevEl: ".mySwiper-3 .swiper-button-prev",
    },
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
    breakpoints: {
      0: { // при 0px и выше
        // direction: 'horizontal',
        spaceBetween: 16,
        slidesPerView: 2,
      },
      600: { // при 0px и выше
        // direction: 'horizontal',
        slidesPerView: 3,
      },
      1024: { // при 0px и выше
        // direction: 'horizontal',
        slidesPerView: 4,
      },
      1370: { // при 0px и выше
        // direction: 'horizontal',
        slidesPerView: 5,
      },
      1610: { // при 768px и выше
        // direction: 'vertical',
        slidesPerView: 6,
      }
    },
  });

};
