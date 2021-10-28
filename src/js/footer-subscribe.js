//ввод текста в поле подписки
$(document).on('input', '.footer__subscribe-input', function () {
	if($(this).val().length > 0) {
		$('.footer__subscribe-submit').prop('disabled', '');
	}else{
		$('.footer__subscribe-submit').prop('disabled', 'disabled');
	}
});

$(".footer__subscribe-input").inputmask({
	alias: "email",
	"clearIncomplete": true,
	showMaskOnHover: false,
	"onincomplete": function() {
		$(this).parent('.footer__subscribe-form').find('.footer__subscribe-submit').prop('disabled', 'disabled');
	}
});
