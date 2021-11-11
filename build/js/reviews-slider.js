$(document).ready(function() {
  if($('.js-reviews-slider').length) {
    $('.js-reviews-slider').slick({
      arrows: true,
      prevArrow: '<button class="slick-prev" type="button" title="Назад"><svg><use xlink:href="#arrow_left"></use></svg></button>',
      nextArrow: '<button class="slick-next" type="button" title="Вперёд"><svg><use xlink:href="#arrow_right"></use></svg></button>',
      infinite: true,
      mobileFirst: true
    });
  }

  if($('.js-reviews-slider-2').length) {
    $('.js-reviews-slider-2').slick({
      arrows: true,
      prevArrow: '<button class="slick-prev" type="button" title="Назад"><svg><use xlink:href="#arrow_left"></use></svg></button>',
      nextArrow: '<button class="slick-next" type="button" title="Вперёд"><svg><use xlink:href="#arrow_right"></use></svg></button>',
      infinite: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1349,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
      ]
    });
  }
});
