$(document).on('click', '.faq__accordion-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).closest('.faq__accordion').find('.faq__accordion-body').slideToggle();
  return false;
});
