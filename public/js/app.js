(function () {

  const productSlider = new Swiper('.product-slider', {
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.product-slider .swiper-button-next',
      prevEl: '.product-slider .swiper-button-prev',
    },
  });

  console.log(productSlider);

})();