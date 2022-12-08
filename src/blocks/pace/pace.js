(() => {

	if (typeof Pace !== "undefined") {
		const vh = window.innerHeight * 0.01;

		document.documentElement.style.setProperty('--vh', `${vh}px`);

		window.addEventListener('resize', () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});
	
		Pace.options = {
			// minTime: 250,
			// ghostTime: 100,
			elements: false,
			ajax: false,
			restartOnPushState: false,
			eventLag: false
			// eventLag: { lagThreshold: 30 }
		}
	
		Pace.on('done', () => {
			$('.pace').delay(500).fadeOut(500);
		});
	
		/* Pace.on('hide', () => {
			console.log('hide');
		}); */
	}

})();