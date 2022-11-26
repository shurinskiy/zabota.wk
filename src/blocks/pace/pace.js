(() => {

	if (typeof Pace !== "undefined") {
		Pace.options = {
			// minTime: 250,
			// ghostTime: 100,
			elements: false,
			ajax: false,
			restartOnPushState: false,
			eventLag: false
		}
	
		Pace.on('done', () => {
			$('.pace').delay(500).fadeOut(500);
		});
	
		/* Pace.on('hide', () => {
			console.log('hide');
		}); */
	}

})();