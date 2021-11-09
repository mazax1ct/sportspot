//тоглер геолокации
$(document).on('click', '.js-location-toggler', function () {
  var _this = $(this);
  var dropdown = $('.location__dropdown');

	if(_this.hasClass('is-active')) {
		dropdown.removeClass('is-open');
		setTimeout(function() {
			dropdown.removeClass('is-active');
		}, 300);
		_this.removeClass('is-active');
	} else {
		dropdown.addClass('is-active');
		setTimeout(function() {
			dropdown.addClass('is-open');
		}, 100);
		_this.addClass('is-active');
	}

  return false;
});

//выбор города
$(document).on('click', '.location__button', function () {
  var _this = $(this);
  var _text = _this.text();
	var dropdown = $('.location__dropdown');

  $('.location__button').removeClass('is-active');
  _this.addClass('is-active');

  $('.location__toggler span').text(_text);

	dropdown.removeClass('is-open');
	setTimeout(function() {
		dropdown.removeClass('is-active');
	}, 300);
	$('.location__toggler').removeClass('is-active');

  return false;
});
