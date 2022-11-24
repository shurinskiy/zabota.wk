import enquire from 'enquire.js';

(() => {

	$('.faq__cap').on('click', function(e) {
		$(this)
			.next('.faq__text')
			.slideToggle()
			.end()
			.toggleClass('opened');
	});

	$('.faq__title').on('click', function(e) {
		let $self = $(this);

		if ($self.css('clear') == 'both') {
			$self
				.next('.faq__items')
				.slideToggle();
		}
	});

	enquire.register("screen and (min-width:960px)", {
		match : () => document.querySelectorAll('.faq__items').forEach(item => item.removeAttribute('style'))
	});

})();
