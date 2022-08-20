(function () {

  const productSlider = new Swiper('.product-slider', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 32,
    autoplay: true,
    navigation: {
      nextEl: '.product-slider .next-slides',
      // prevEl: '.product-slider .prev-slides',
    },
  });

})();