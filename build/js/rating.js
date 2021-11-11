$(document).on('click', '.rating__button', function () {
  $(this).addClass('is-active');
  $(this).prevAll('.rating__button').addClass('is-active');
  $(this).nextAll('.rating__button').removeClass('is-active');
  $('#rating_value').val($(this).attr('title'));
  return false;
});
