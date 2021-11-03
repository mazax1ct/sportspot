$(document).on('click', '.categories-list__link', function () {
  $('.categories-list__link').removeClass('is-active');
  $(this).addClass('is-active');
  return false;
});

const scroller = new Scroller({
    el: document.querySelector('.js-scrooler'),
    scrollbar: 'hidden',
    anchors: 'hidden',
    align: 'left',
    start: 'start'
});

$(document).on('click', '.categories-list__button--prev', function () {
  scroller.scrollTo('start');
  return false;
});

$(document).on('click', '.categories-list__button--next', function () {
  scroller.scrollTo('end');
  return false;
});
