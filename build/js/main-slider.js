$(document).ready(function() {
  if($('.js-main-slider').length) {
    $('.js-main-slider').slick({
      arrows: true,
      prevArrow: '<button class="slick-prev" type="button" title="Назад"><svg><use xlink:href="#arrow_left"></use></svg></button>',
      nextArrow: '<button class="slick-next" type="button" title="Вперёд"><svg><use xlink:href="#arrow_right"></use></svg></button>',
      appendArrows: $('.main-slider__nav-arrows'),
      infinite: true,
      mobileFirst: true,
      dots: true,
      appendDots: $('.main-slider__nav-dots')
    });

    $('.js-main-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        var deca;
        var deca_2;
        if(i<10) {
          deca = 0;
        }
        if(slick.slideCount<10) {
          deca_2 = 0;
        }
        $('.main-slider__nav-nums').html('<span>'+deca+i+'</span>'+' / '+deca_2+slick.slideCount);
    });
  }
});
