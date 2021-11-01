var header = $('.header'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();

  if ( scrolled > $('.header').height() ) {
		header.addClass('scrolled');
	} else {
		header.removeClass('scrolled');
	}

	if ( scrolled > $('.header').height() && scrolled > scrollPrev ) {
		header.addClass('out');
		/*закрываем поиск*/
		document.removeEventListener('click', closeSearch);
    $('.search-block').removeClass('open');
    $('.search-dropdown').fadeOut();
		$('.search-bar__input').blur();
		/*закрываем поиск*/
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});

//ввод текста в поле поиска
$(document).on('input', '.search-bar__input', function () {
	if($(this).val().length > 0) {
		$('.search-bar__submit').prop('disabled', '');
	}else{
		$('.search-bar__submit').prop('disabled', 'disabled');
	}
});
