(() => {

	document.querySelectorAll('.team__item-toggle').forEach((toggle) => {
		toggle.addEventListener('click', () => {
			toggle.classList.toggle('hidden');
			toggle.nextElementSibling.classList.toggle('opened');
		});
	});

})();
