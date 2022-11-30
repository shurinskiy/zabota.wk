import { arrLast } from "../../js/libs/helpers";

(() => {
	const audio = document.getElementById('audio');

	document.querySelectorAll('button.block-a__play').forEach(button => {
		button.addEventListener('click', () => {
			if (arrLast(audio.src.split('/')) !== arrLast(button.dataset.audio.split('/'))) {
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
