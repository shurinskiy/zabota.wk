// import { slideToggle } from "../../js/libs/helpers";

(() => {
	let timer;
	const faq_items = document.querySelectorAll('.faq__items');

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

	window.onresize = () => {
		clearTimeout(timer);

		timer = setTimeout(() => {
			faq_items.forEach(item => item.removeAttribute('style'));
		}, 100);
	};

	/* document.querySelectorAll('.faq__cap').forEach((toggle) => {
		toggle.addEventListener('click', () => {
			slideToggle(toggle.nextElementSibling, 400, function(el) {
				toggle.classList.toggle('opened');
			});
		});
	}); */

})();
