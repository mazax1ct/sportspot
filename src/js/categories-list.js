//скролл текущей кнопки в область видимости контейнера
function controlsScroll(elem) {
  var containerOuterWidth = elem.parent().parent().outerWidth(); // узнаем ширину контейнера (width + padding)
  var itemOuterWidth = elem.outerWidth(); // узнаем ширину текущего элемента (width + padding)
  var itemOffsetLeft = elem.parent().offset().left; // узнаем значение отступа слева в контейнере у текущего элемента
  var containerScrollLeft = elem.parent().parent().scrollLeft(); // узнаем текущее значение скролла
  var positionCetner = (containerOuterWidth / 2 - itemOuterWidth / 2); // рассчитываем позицию центра
  var scrollLeftUpd = containerScrollLeft + itemOffsetLeft - positionCetner; // рассчитываем положение скролла относительно разницы отступа элемента и центра контейнера
  // анимируем
  elem.parent().parent().animate({
    scrollLeft: scrollLeftUpd
  }, 400);
}

$(document).on('click', '.categories-list__link', function () {
  $('.categories-list__link').removeClass('is-active');
  $(this).addClass('is-active');
  controlsScroll($(this));
  return false;
});

$(document).on('click', '.categories-list__button--prev', function () {
  var current = $('.categories-list__link.is-active');
  if(current.parent().prev('.categories-list__item').length) {
    $('.categories-list__link').removeClass('is-active');
    current.parent().prev('.categories-list__item').find('.categories-list__link').addClass('is-active');
    controlsScroll(current.parent().prev('.categories-list__item').find('.categories-list__link'));
  }
  return false;
});

$(document).on('click', '.categories-list__button--next', function () {
  var current = $('.categories-list__link.is-active');
  if(current.parent().next('.categories-list__item').length) {
    $('.categories-list__link').removeClass('is-active');
    current.parent().next('.categories-list__item').find('.categories-list__link').addClass('is-active');
    controlsScroll(current.parent().next('.categories-list__item').find('.categories-list__link'));
  }
  return false;
});
