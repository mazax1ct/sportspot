$(document).on('click', '.faq__accordion-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).closest('.faq__accordion').find('.faq__accordion-body').slideToggle();
  return false;
});

$(document).on('focus', '.search__input', function () {
  $('.search__dropdown').fadeIn();
  document.addEventListener('click', closeSearchDrop);
  return false;
});

function closeSearchDrop(evt) {
  if (!$('.search').is(evt.target) && $('.search').has(evt.target).length === 0) {
    document.removeEventListener('click', closeSearchDrop);
    $('.search__dropdown').fadeOut();
	}
}

$(document).on('click', '.search__dropdown-option', function () {
  $('.search__input').val($(this).text());
  $('.search__button').prop('disabled', '');
  return false;
});

$(document).on('input', '.search__input', function () {
	if($(this).val().length > 0) {
		$('.search__button').prop('disabled', '');
	}else{
		$('.search__button').prop('disabled', 'disabled');
	}
});
