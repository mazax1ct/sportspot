$(document).ready(function() {
  if($('.js-categories-slider').length) {
    $('.js-categories-slider').slick({
      arrows: true,
      prevArrow: '<button class="slick-prev" type="button" title="Назад"><svg><use xlink:href="#arrow_left"></use></svg></button>',
      nextArrow: '<button class="slick-next" type="button" title="Вперёд"><svg><use xlink:href="#arrow_right"></use></svg></button>',
      infinite: true,
      mobileFirst: true
    });
  }
});
