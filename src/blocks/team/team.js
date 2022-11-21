(() => {
	const items = document.querySelectorAll('.team__item');

	if (items) {
		items.forEach(item => {
			item.querySelector('.team__item-toggle').addEventListener('click', function(e) {
				items.forEach(item => item.classList.remove('opened'));
				this.closest('.team__item').classList.toggle('opened');
			});
		})

		document.addEventListener('click', (e) => {
			if([...items].some(item => item.classList.contains('opened')) && !e.target.closest('.team__item')) {
				items.forEach(item => item.classList.remove('opened'));
			}
		});
	}

})();
