(() => {
	const audio = document.getElementById('audio');

	document.querySelectorAll('button.block-a__play').forEach(button => {
		button.addEventListener('click', () => {
			if (audio.src.split('/').at(-1) !== button.dataset.audio.split('/').at(-1)) {
				audio.src = button.dataset.audio;
				button.classList.add('playing');
				audio.play();
			} else {
				audio.paused ? audio.play() : audio.pause();
				button.classList.toggle('playing');
			}
		});
	});

})();
