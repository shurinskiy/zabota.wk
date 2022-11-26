(() => {

	$('.rate__toggle').on('click', function() {
		$(this)
			.toggleClass('showed')
			.nextAll('tr')
			.toggleClass('showed');
	});

	$('.rate__cost').find('button').on('click', function() {
		$('.rate__table th')
			.add('.rate__table td')
			.removeClass('active')
			.filter(`.${this.id}`)
			.addClass('active');

		$('.resume__field[data-rate]').attr('data-rate', this.id);
	});

})();
