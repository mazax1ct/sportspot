$(document).ready(function() {
  if($('.js-detail-slider').length) {
    $('.js-detail-slider').slick({
      arrows: false,
      mobileFirst: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.js-detail-thumbs',
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            arrows: false
          }
        }
      ]
    });
  }

  if($('.js-detail-thumbs').length) {
    $('.js-detail-thumbs').slick({
      arrows: false,
      mobileFirst: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.js-detail-slider',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            arrows: true,
            prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#arrow_up"/></svg></button>',
            nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#arrow_down"/></svg></button>',
            vertical: true,
            centerMode: false,
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
});
