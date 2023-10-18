/* 
* Заставка с прогрессом предварительной загрузки 
* 
* @требуемая html структура:
* <div class="preloader">
* 	<div class="preloader__counter"></div>
* 	<div class="preloader__progress"></div>
* </div>
* 
* @вызов:
* 
import { preloadingBar } from "../../js/libs/preloader";
preloadingBar({ class: 'preloader', area: 'body' });
* 
*/

export const preloadingBar = (options = {}) => {
	let ctr = 0;
	let images = [];
	// let interval;
	// const step = options.step || 4;
	const cls = options.class || 'preloader';
	const area = document.querySelector(options.area) || document;
	const _wrapper = document.querySelector(`.${cls}`);
	const _counter = document.querySelector(`.${cls}__counter`);
	const _progress = document.querySelector(`.${cls}__progress`);

	if (!_wrapper) return;

	const getImages = () => {
		area.querySelectorAll('*:not(script)').forEach((tag) => {
			let background = getComputedStyle(tag, null).backgroundImage;

			if (tag.src && (tag.tagName.toLowerCase() == 'img' || tag.tagName.toLowerCase() == 'video')) {
				images = [...images, tag.src];
			} else if (background !== 'none') {
				images = [...images, ...parseUrl(background)];
			}
		});
	}

	const parseUrl = (background) => {
		return background.split(',').reduce((images, part) => {
			if (part.includes('url')) {
				return [...images, part.trim().slice(4, -1).replace(/["']/g, "")];
			}
			
			return images;
		}, []);
	}

	/* function increasePercent(num, elem) {
		clearInterval(interval);

		let computed = getComputedStyle(_wrapper, null);
		let time = parseInt(computed.transitionDuration) * 1000;
		let t = Math.round(time / (num / step));
		let n = parseInt(elem.innerText);

		let interval = setInterval(() => {
			n = n + step;
			elem.innerText = n;
		
			if (n >= num) {
				clearInterval(interval);
				elem.innerText = num;
			}
		}, t);
	} */

	const imagesLoaded = () => {
		let percent = Math.round(100 / images.length * ++ctr);

		if(_counter) {
			// increasePercent(percent, _counter);
			_counter.innerText = percent;
		}

		
		if(_progress)
			_progress.style.width = `${percent}%`;
		
		if(ctr === images.length) 
			loadDone();
	}
	
	const loadDone = () => {
		let computed = getComputedStyle(_wrapper, null);
		let delay = parseInt(computed.transitionDuration) * 1000;
		_wrapper.style.opacity = 0;

		setTimeout(() => { 
			_wrapper.remove();
			// area.classList.remove('preloading');
		}, delay || 1200);
	}

	const init = () => {
		getImages();
		// area.classList.add('preloading');

		images.forEach((item, i) => {
			let clone = new Image();

			clone.src = images[i];
			clone.onload = imagesLoaded;
			clone.onerror = imagesLoaded;
		});
	}

	document.addEventListener('DOMContentLoaded', init, false);
}