(() => {
	const header = document.querySelector('.header');

	window.addEventListener('scroll', () => {
		let offset = window.scrollY || window.pageYOffset;
		header.classList[(offset > header.offsetHeight / 4) ? 'add' : 'remove']('header_filled');
	});

})();
