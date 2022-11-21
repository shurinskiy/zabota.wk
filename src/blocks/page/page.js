(() => {

	document.querySelectorAll('a.page__back').forEach(button => {
		button.addEventListener('click', () =>  history.go(-1));
	});

})();
