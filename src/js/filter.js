function formatState (state) {
  if (!state.id) {
    return state.text;
  }

  var new_state = $('<span class="sorting-text"><span class="sorting-text__text">'+ state.text +'</span><svg class="sorting-text__icon" aria-hidden="true"><use xlink:href="#'+ state.element.className +'" /></svg></span>');

  new_state.find(".text").text(state.text);

  return new_state;
};

var filterOffsetTop;
var windowScroll;

$(document).ready(function() {
  filterOffsetTop = $('.catalog-section').offset().top;
  windowScroll = $(window).scrollTop();

	$('.js-sorting').each(function() {
   var $p = $(this).closest('.select-wrapper__container');
   $(this).select2({
     dropdownCssClass: 'sorting-select',
		 minimumResultsForSearch: Infinity,
     dropdownPosition: 'below',
     dropdownParent: $p,
     templateResult: formatState,
     templateSelection: formatState
   });
	}).on("select2:open", function (e) {
		var $p = $(this).closest('.select-wrapper__container');
		$p.addClass('open');
	}).on("select2:close", function (e) {
		var $p = $(this).closest('.select-wrapper__container');
		$p.removeClass('open');
	});

  if ($('.js-price-slider').length) {
      var min = 4900;
      var max = 28000;

      $(".js-price-slider").ionRangeSlider({
          skin: "round",
          type: "double",
          min: min,
          max: max,
          from: min,
          to: max,
          grid: false,
          hide_min_max: true,
          hide_from_to: true,
          onChange: function(data) {
              $('.js-min').val(data.from);
              $('.js-max').val(data.to);
          }
      });

      var price_range = $(".js-price-slider").data("ionRangeSlider");

      $('.js-min, .js-max').on('change', function() {
          price_range.update({
              from: $('.js-min').val(),
              to: $('.js-max').val()
          });

          if ($('.js-min').val() < min) {
              price_range.update({
                  from: $('.js-min').val(min)
              });
          }

          if ($('.js-max').val() < min) {
              price_range.update({
                  from: $('.js-max').val(min)
              });
          }

          if ($('.js-max').val() > max) {
              price_range.update({
                  from: $('.js-max').val(max)
              });
          }
      });
  }
});

$(document).on('click', '.js-filter-opener', function () {
  if(!$('body').hasClass('compensate-for-scrollbar')) {
    scrollCompensate();
  }

  $('body').addClass('overflow');

  $('.full-filter').fadeIn('300', function () {
    $('.full-filter__inner').addClass('is-open');
    document.addEventListener('click', closeFilter);
  });
  return false;
});

$(document).on('click', '.js-filter-closer', function () {
  $('.full-filter__inner').removeClass('is-open');
  setTimeout(function() {
    $('.full-filter').fadeOut();
    $('body').removeClass('overflow');

    $('body').removeClass('compensate-for-scrollbar');
    $('#scroll-compensate').remove();

    document.removeEventListener('click', closeFilter);
  }, 300);
  return false;
});

function closeFilter(evt) {
  if (!$('.full-filter__inner').is(evt.target) && $('.full-filter__inner').has(evt.target).length === 0) {
    $('.full-filter__inner').removeClass('is-open');

    setTimeout(function() {
      $('.full-filter').fadeOut();
      $('body').removeClass('overflow');

      $('body').removeClass('compensate-for-scrollbar');
			$('#scroll-compensate').remove();

      document.removeEventListener('click', closeFilter);
    }, 300);
	}
}

$(document).on('click', '.js-filter-section-toggler', function () {
  var _this = $(this);

  $('.filter__top-dropdown').fadeOut();

  if(_this.hasClass('is-active')) {
    $('.js-filter-section-toggler').removeClass('is-active');
    _this.removeClass('is-active');

    _this.closest('.filter__top-section').find('.filter__top-dropdown').fadeOut();
  } else {
    $('.js-filter-section-toggler').removeClass('is-active');
    _this.addClass('is-active');

    _this.closest('.filter__top-section').find('.filter__top-dropdown').fadeIn();
  }

  return false;
});

const scroller = new Scroller({
    el: document.querySelector('.js-scrooler'),
    anchors: 'hidden',
    align: 'left',
    start: 'start'
});

$(window).scroll(function() {
  filterOffsetTop = $('.catalog-section').offset().top;

  windowScroll = $(window).scrollTop();

  if ( windowScroll > filterOffsetTop ) {
		$('.filter').addClass('scrolled');
	} else {
		$('.filter').removeClass('scrolled');
	}
});
