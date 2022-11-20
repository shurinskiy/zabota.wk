import { slideToggle } from "../../js/libs/helpers";

(() => {

	document.querySelectorAll('.task__toggle').forEach((toggle) => {
		toggle.addEventListener('click', () => {
			slideToggle(toggle.nextElementSibling);
			// toggle.nextElementSibling.classList.toggle('opened');
		});
	});

})();
