import gsap from "gsap";

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
	
	gsap.matchMedia().add("(min-width: 960px)", () => {
		document.querySelectorAll('.faq__items').forEach(item => item.removeAttribute('style'));
	});

})();
