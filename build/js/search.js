$(document).on('focus', '.search-bar__input', function () {
  $('.search-block').addClass('open');
  $('.search-dropdown').fadeIn();
  document.addEventListener('click', closeSearch);
  return false;
});

function closeSearch(evt) {
  if (!$('.search-block').is(evt.target) && $('.search-block').has(evt.target).length === 0) {
    document.removeEventListener('click', closeSearch);
    $('.search-block').removeClass('open');
    $('.search-dropdown').fadeOut();
	}
}
