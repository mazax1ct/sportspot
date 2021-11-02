$(document).on('click', '.js-menu-opener', function () {
  if(!$('body').hasClass('compensate-for-scrollbar')) {
    scrollCompensate();
  }

  $('body').addClass('overflow');

  $('.main-menu').fadeIn('300', function () {
    $('.main-menu__inner').addClass('is-open');
    document.addEventListener('click', closeMainMenu);
  });
  return false;
});

$(document).on('click', '.js-menu-closer', function () {
  $('.main-menu__inner').removeClass('is-open');
  setTimeout(function() {
    $('.main-menu').fadeOut();
    $('body').removeClass('overflow');

    $('body').removeClass('compensate-for-scrollbar');
    $('#scroll-compensate').remove();

    document.removeEventListener('click', closeMainMenu);
  }, 300);
  return false;
});

function closeMainMenu(evt) {
  if (!$('.main-menu__inner, .catalog-submenu').is(evt.target) && $('.main-menu__inner, .catalog-submenu').has(evt.target).length === 0) {
    $('.catalog-submenu').removeClass('is-open');
    $('.catalog-menu__item').removeClass('is-open');
    $('.main-menu__inner').removeClass('is-open');

    setTimeout(function() {
      $('.main-menu').fadeOut();
      $('body').removeClass('overflow');

      $('body').removeClass('compensate-for-scrollbar');
			$('#scroll-compensate').remove();

      document.removeEventListener('click', closeMainMenu);
    }, 300);
	}
}

$(document).on('click', '.js-submenu-opener', function () {
  $('.catalog-menu__item').removeClass('is-open');
  $('.catalog-submenu').removeClass('is-open');

  $(this).parent().toggleClass('is-open');
  $('.catalog-submenu[data-menu="'+$(this).attr('data-menu')+'"]').toggleClass('is-open');
  return false;
});

$(document).on('click', '.js-submenu-closer', function () {
  $('.catalog-menu__item').removeClass('is-open');
  $(this).closest('.catalog-submenu').removeClass('is-open');
  return false;
});
