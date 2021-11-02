$(document).on('click', '.js-categories-toggler', function () {
  $(this).toggleClass('is-active');
  $('.categories-menu__dropdown').slideToggle();
  return false;
});
