// import { slideToggle } from "../../js/libs/helpers";

(() => {

	$('.task__toggle').on('click', function(e) {
		$(this)
			.next('.task__items_remains')
			.slideToggle();
	});


	/* document.querySelectorAll('.task__toggle').forEach((toggle) => {
		toggle.addEventListener('click', () => {
			slideToggle(toggle.nextElementSibling);
			// toggle.nextElementSibling.classList.toggle('opened');
		});
	}); */

})();
